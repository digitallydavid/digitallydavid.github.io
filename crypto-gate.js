/* ========================================
   SHARED PASSWORD-GATE CRYPTO HELPERS
   ========================================
   Used by script.js (grid unlock check) and by each password-protected
   project page (projects/protected-page.js) to verify a password and
   decrypt content without ever storing the password itself anywhere. */

const GATE_PBKDF2_ITERATIONS = 250000;

function gateBase64ToBytes(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

async function gateDeriveKey(password, saltBytes) {
    const enc = new TextEncoder();
    const baseKey = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: saltBytes, iterations: GATE_PBKDF2_ITERATIONS, hash: 'SHA-256' },
        baseKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
    );
}

// Attempts to decrypt a {salt, iv, ciphertext} blob (all base64 strings) with the
// given password. Returns the decrypted string on success, or null on a wrong
// password / corrupt data (AES-GCM's built-in auth tag makes this check reliable
// without ever comparing against a stored password anywhere).
async function gateDecrypt(password, blob) {
    try {
        const salt = gateBase64ToBytes(blob.salt);
        const iv = gateBase64ToBytes(blob.iv);
        const ciphertext = gateBase64ToBytes(blob.ciphertext);
        const key = await gateDeriveKey(password, salt);
        const plainBuf = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);
        return new TextDecoder().decode(plainBuf);
    } catch (err) {
        return null;
    }
}
