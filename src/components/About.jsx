import profile from "../assets/profile-image.jpeg"
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiTensorflow,
  SiPytorch,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiAmazonaws,
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiGithub,
  SiLinux,
  SiGoland,
  SiPostgresql,
  SiMongodb,
  SiAmazondynamodb,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiFirebase,
  SiSass,
  SiGnubash,
  SiMariadb,
  SiJupyter,
  SiSlack,
  SiMicrosoftteams,
} from 'react-icons/si';
import { RiGitlabFill } from 'react-icons/ri';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { GrMysql } from 'react-icons/gr';

export const About = () => {
  return (
    <div className="bg-[#F9F9FF] py-10">
      <h1 className="text-5xl pl-24 pb-8">About</h1>
      <div className="flex justify-center mx-4">
        <div className="flex gap-4">
          <img
            src={ profile }
            alt="Profile Image"
            className='w-28 h-28 my-auto p-1 rounded-full'
          />
          <div className="flex gap-4 p-6 max-w-[45rem] bg-[#ffffff] rounded-3xl">
            <p className="w-1/2 text-primary">Hi I'm Giovanni, Machine Learning, Full Stack Developer and Data Science Enthusiastic from México. Technology enthusiast, I love to spend my days getting to know the latest tools in the world of technology, so I love to enjoy my free time with board games, mountain biking and dogs.</p>
            <div className="w-1/2">
              {/* Machine Learning Bar */}
              <div class="flex justify-between mb-2">
                <span class="text-base font-medium text-primary">Machine Learning Developer</span>
                <span class="text-sm font-medium text-primary">85%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                <div class="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              {/* Backend Developer Bar */}
              <div class="flex justify-between mb-2">
                <span class="text-base font-medium text-primary">Backend Developer</span>
                <span class="text-sm font-medium text-primary">78%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-2.5 mb-2">
                <div class="bg-emerald-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
              {/* Frontend Developer Bar */}
              <div class="flex justify-between mb-2">
                <span class="text-base font-medium text-primary">Frontend Developer</span>
                <span class="text-sm font-medium text-primary">60%</span>
              </div>
              <div class="w-full bg-gray-300 rounded-full h-2.5">
                <div class="bg-purple-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 gap-1">
        <div className="flex justify-center gap-16 my-4">
          <SiPython className="text-[4rem] text-primary" />
          <SiNumpy className="text-[4rem] text-primary" />
          <SiPandas className="text-[4rem] text-primary" />
          <SiTensorflow className="text-[4rem] text-primary" />
          <SiDocker className="text-[4rem] text-primary" />
          <SiAmazonaws className="text-[4rem] text-primary" />
          <SiGithub className="text-[4rem] text-primary" />
        </div>
        <div className="flex justify-center gap-16 my-4">
          <SiKeras className="text-[3rem] text-primary" />
          <SiPytorch className="text-[3rem] text-primary" />
          <SiJavascript className="text-[3rem] text-primary" />
          <SiScikitlearn className="text-[3rem] text-primary" />
          <SiGooglecloud className="text-[3rem] text-primary" />
          <SiKubernetes className="text-[3rem] text-primary" />
          <AiOutlineConsoleSql className="text-[3rem] text-primary" />
        </div>
        <div className="flex justify-center gap-16 my-4">
          <SiAmazondynamodb className="text-[2.5rem] text-primary" />
          <SiFastapi className="text-[2.5rem] text-primary" />
          <SiJupyter className="text-[2.5rem] text-primary" />
          <SiHtml5 className="text-[2.5rem] text-primary" />
          <RiGitlabFill className="text-[2.5rem] text-primary" />
          <SiPostgresql className="text-[2.5rem] text-primary" />
          <SiMongodb className="text-[2.5rem] text-primary" />
        </div>
        <div className="flex justify-center gap-16 my-4">
          <SiLinux className="text-[2rem] text-primary" />
          <SiDjango className="text-[2rem] text-primary" />
          <SiGoland className="text-[2rem] text-primary" />
          <SiReact className="text-[2rem] text-primary" />
          <SiFlask className="text-[2rem] text-primary" />
          <GrMysql className="text-[2rem] text-primary" />
          <SiTailwindcss className="text-[2rem] text-primary" />
        </div>
        <div className="flex justify-center gap-16 my-4">
          <SiNodedotjs className="text-[1.5rem] text-primary" />
          <SiSlack className="text-[1.5rem] text-primary" />
          <SiCss3 className="text-[1.5rem] text-primary" />
          <SiFirebase className="text-[1.5rem] text-primary" />
          <SiSass className="text-[1.5rem] text-primary" />
          <SiGnubash className="text-[1.5rem] text-primary" />
          <SiMariadb className="text-[1.5rem] text-primary" />
          {/* <SiMicrosoftteams className="text-[1.5rem]" /> */}
        </div>
      </div>
    </div>
  )
}
