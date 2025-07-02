import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Download Button */}
        <div className="flex justify-end mb-8">
          <a
            href="/resume.pdf"
            className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
            download
          >
            Download PDF
          </a>
        </div>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center border-b-2 border-gray-200 dark:border-gray-700 pb-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-accent-600">David <span className="text-gray-900 dark:text-white">Reynolds</span></h1>
            <div className="text-accent-600 font-semibold">TECHNICAL ARTIST</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">951.970.0761<br />digitallydavid@gmail.com</div>
          </div>
          <div className="mt-4 md:mt-0 text-gray-600 dark:text-gray-300 text-right">
            <div>12712 NE 52nd Cir<br />Vancouver, WA 98682</div>
          </div>
        </div>
        {/* Summary */}
        <div className="mb-8">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">David is...</h2>
          <ul className="list-disc ml-6 text-gray-700 dark:text-gray-200 space-y-1">
            <li>a versatile technical artist with a passion for tool, system, and feature design</li>
            <li>a problem-solver that seeks to enhance gameplay experiences with care</li>
            <li>a proven leader driven by team collaboration and perpetual learning</li>
          </ul>
        </div>
        {/* Skills */}
        <div className="mb-8">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Skills</h2>
          <div className="flex flex-col md:flex-row md:space-x-8 text-gray-700 dark:text-gray-200">
            <div className="mb-2 md:mb-0">
              <span className="font-semibold">DCC:</span> Maya, Zbrush, Substance Suite, Blender, Unreal Engine, Unity, Houdini, Nuke, Adobe Suite, 3dCoat, Marmoset.
            </div>
            <div>
              <span className="font-semibold">Languages:</span> C++, C#, Python
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="mb-8">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <span className="font-bold">Technical Artist, AIRSHIP SYNDICATE</span> <span className="text-gray-500">Nov 2022 - Current, Remote</span>
              <div className="text-gray-700 dark:text-gray-200 text-sm">Responsible for many technical art initiatives, such as optimizing game performance, designing tools, and implementing animation systems. Shipped Wayfinder (2023) and currently contributing to two unannounced titles.</div>
            </div>
            <div>
              <span className="font-bold">3D Character Artist, <span className="tracking-widest">KID A AMNESIA</span></span> <span className="text-gray-500">Jan 2021 - Nov 2021, Arbitrarily Good Productions, Remote</span>
              <div className="text-gray-700 dark:text-gray-200 text-sm">Led character creation, from sculpting/modeling to retopology, rigging, and in-engine implementation. Developed character behaviors and reactive animation systems.</div>
            </div>
            <div>
              <span className="font-bold">3D Artist, SOLAR ASH</span> <span className="text-gray-500">May 2021 - Nov 2021, Heart Machine, Remote</span>
              <div className="text-gray-700 dark:text-gray-200 text-sm">Created last minute environmental assets, including Houdini-generated body piles, infected targets, and corpse props. Supported art team with miscellaneous modeling tasks to meet shipping deadlines.</div>
            </div>
            <div>
              <span className="font-bold">3D Character Artist, WE ARE OFK</span> <span className="text-gray-500">Jan 2020 - July 2020, Teddy Dief Productions, Remote</span>
              <div className="text-gray-700 dark:text-gray-200 text-sm">Expanded the game's cast by adapting the main character base meshes into unique supporting roles. Delivered final models and textures aligned with the project's stylized aesthetic.</div>
            </div>
            <div>
              <span className="font-bold">3D Character and Tech Artist, Contractor</span> <span className="text-gray-500">May 2020 - Sep 2022, Vancouver, WA</span>
              <div className="text-gray-700 dark:text-gray-200 text-sm">Clients: Annapurna, Iridium Games, Giant Sparrow, Arbitrarily Good Games.</div>
            </div>
            <div>
              <span className="font-bold">Senior Compositor</span> <span className="text-gray-500">August 2015 - January 2020, Burbank CA</span>
              <div className="text-gray-700 dark:text-gray-200 text-sm">Worked at Ingenuity Studios, Fuse FX, and Barnstorm VFX<br />Clients: <span className="italic">The Orville, Taylor Swift, Maroon 5, American Horror Story, Grey's Anatomy, 9-1-1</span></div>
            </div>
          </div>
        </div>
        {/* Education */}
        <div>
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="mb-2">
            <span className="font-bold">CGMA "Character Creation for Games"</span> <span className="text-gray-500">2019- October to December, Los Angeles, CA</span>
            <div className="text-gray-700 dark:text-gray-200 text-sm">9 week technical course, covering the creation of appealing production ready characters.</div>
          </div>
          <div>
            <span className="font-bold">Chapman University</span> <span className="text-gray-500">2011 - 2015, Orange CA</span>
            <div className="text-gray-700 dark:text-gray-200 text-sm">BFA in Digital Arts for Visual Effects, Minor in Game Development</div>
          </div>
        </div>
      </div>
    </div>
  );
} 