/* ========================================
   PROTECTED PROJECT PAGE UNLOCK
   ========================================
   Each protected project page embeds its own encrypted content as
   window.GATE_PAGE_PAYLOAD ({ salt, iv, ciphertext }) and includes this
   script (after crypto-gate.js) to prompt for a password and decrypt it
   client-side. Nothing readable is served until the correct password is
   supplied, so this also protects against someone opening the page URL
   directly without going through the portfolio grid's unlock flow. */

(function () {
    const SESSION_KEY = 'portfolioGatePassword';

    async function reveal(password) {
        const decrypted = await gateDecrypt(password, window.GATE_PAGE_PAYLOAD);
        if (!decrypted) {
            return false;
        }

        const data = JSON.parse(decrypted);

        document.title = data.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', data.description);
        }

        document.getElementById('pageHeroH1').innerHTML = data.heroH1;
        document.getElementById('pageHeroSubheader').textContent = data.heroSubheader;
        document.getElementById('pageContent').innerHTML = data.bodyHtml;

        document.getElementById('pageGate').style.display = 'none';
        document.getElementById('pageContent').style.display = 'block';

        sessionStorage.setItem(SESSION_KEY, password);
        return true;
    }

    async function tryUnlock() {
        const input = document.getElementById('pageGatePassword');
        const hint = document.getElementById('pageGateHint');
        const ok = await reveal(input.value);

        if (!ok) {
            hint.textContent = 'Incorrect password. Please try again.';
            hint.className = 'password-hint error';
            input.value = '';
        }
    }

    document.addEventListener('DOMContentLoaded', async function () {
        const cachedPassword = sessionStorage.getItem(SESSION_KEY);
        if (cachedPassword) {
            const ok = await reveal(cachedPassword);
            if (ok) {
                return;
            }
        }

        const btn = document.getElementById('pageGateBtn');
        const input = document.getElementById('pageGatePassword');
        if (btn) {
            btn.addEventListener('click', tryUnlock);
        }
        if (input) {
            input.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    tryUnlock();
                }
            });
        }
    });
})();
