import { memo } from "react";
import PropTypes from "prop-types";

const languages = ["English", "French"];
const skills = ["Next.js", "React.js", "React Native", "Express", "FastAPI", "MySql", "PostgreSQL", "MongoDB", "Docker", "AWS", "CPanel","OVH","Git", "GitHub", "GitLab", "Figma", "Canva", "Photoshop"];

const ListData = ({data = [], tag}) => {
  return (
    <div className="ml-4 lg:ml-8 mr-2">
      <span className=" text-white">{tag}: </span>
      <span className="text-gray-400">{`['`}</span>
        {
          data.map((item, index) => (
            <span key={index}>
              <span className="text-amber-300">{item}</span>
              {index < data.length - 1 && (<span className="text-gray-400">{"', '"}</span>)}
            </span>
          ))
        }
      <span className="text-gray-400">{"'],"}</span>
    </div>
  )
}

ListData.propTypes = {
  data: PropTypes.array,
  tag: PropTypes.string
};

const AboutObjectSnippet = memo(function AboutObjectSnippet() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 w-11/12 max-w-2xl">
      <div className="grid">
        <div className="order-1 lg:order-2 from-[#0d1224] border-secondary relative  border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="text-xs md:text-sm lg:text-base  font-space_mono">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">me</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">NDANG ESSI Pierre Junior</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  nationality:
                </span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Cameroonian</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              
              <ListData data={languages} tag={'languages'}/>
              <ListData data={skills} tag={'skills'}/>
              
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  disciplined:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                  hireable:
                </span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{"() {"}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                  return
                </span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">disciplined</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>
              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
})

export default AboutObjectSnippet;
