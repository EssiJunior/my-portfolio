// REACT COMPONENT
import * as React from 'react';

// CUSTOMIZED COMPONENT
import Typography from '../Typography/Typography';

// UTILS
import { projectCardProps } from '@/utils/prop-types';
import { useTranslation } from 'react-i18next';

function ProjectCard({ project }) {
    const {t} = useTranslation();

    return (
        <div className="from-[#171717] border-secondary relative rounded-lg border bg-gradient-to-r to-[#272727] w-full">
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green"></div>
                </div>
                <Typography className={`text-center ml-3 text-secondary text-base lg:text-xl`} text={project.name} />
            </div>
            <div className="overflow-hidden border-t-[2px] border-secondary px-4 lg:px-8 py-4 lg:py-8">
                <code className="font-mono text-xs md:text-sm lg:text-base">
                    <div className="blink">
                        <span className="mr-2 text-pink-500">const</span>
                        <span className="mr-2 text-white">{t('pr')}</span>
                        <span className="mr-2 text-pink-500">=</span>
                        <span className="text-gray-400">{'{'}</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">{t('nameP')}:</span>
                        <span className="text-gray-400">{`'`}</span>
                        <span className="text-tertiary">{project.name}</span>
                        <span className="text-gray-400">{`',`}</span>
                    </div>

                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className=" text-white">{t('tools')}:</span>
                        <span className="text-gray-400">{` ['`}</span>
                        {
                            project.tools.map((tag, i) => (
                                <React.Fragment key={i}>
                                    <span className="text-amber-300">{tag}</span>
                                    {
                                        project.tools.length - 1 !== i &&
                                        <span className="text-gray-400">{`', '`}</span>
                                    }
                                </React.Fragment>
                            ))
                        }
                        <span className="text-gray-400">{"],"}</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">{t('role')}:</span>
                        <span className="text-orange-400">{project.role}</span>
                        <span className="text-gray-400">,</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-white">{t('description')}:</span>
                        <span className="text-cyan-400">{' ' + project.description}</span>
                        <span className="text-gray-400">,</span>
                    </div>
                    {
                        project.demo !== '' &&
                        <div className="ml-4 lg:ml-8 mr-2">
                            <span className="text-white">{t('demo')}:</span>
                            <a className="text-green" href={project.demo} target='_blank'>{' ' + project.demo}</a>
                            <span className="text-gray-400">,</span>
                        </div>
                    }
                    {
                        project.code !== '' &&
                        <div className="ml-4 lg:ml-8 mr-2">
                            <span className="text-white">{t('code')}:</span>
                            <a className="text-green" href={project.code} target='_blank'>{' ' + project.code}</a>
                            <span className="text-gray-400">,</span>
                        </div>
                    }
                    <div><span className="text-gray-400">{`};`}</span></div>
                </code>
            </div>
        </div>
    );
}

ProjectCard.propTypes = projectCardProps;
export default ProjectCard;