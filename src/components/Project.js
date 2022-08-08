import { Zoom } from "react-awesome-reveal";
import { Collapse } from 'antd';
import React from 'react';
import { TbLink } from "react-icons/tb";
import { BsFileEarmarkLock } from "react-icons/bs";
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Project = ({ title, type, stacks, description, contributionsFE, contributionsBE, contributionsDO, imgUrl, link }) => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className="project">
            <Zoom triggerOnce>
                <div className="project-top-wrapper">
                    <div className="project-top">
                        <div className="project-title">{title}</div>
                        <br />
                        <div className="project-type">{type}</div>
                    </div>
                    <div className="project-link-icon">
                        {
                            link === ""
                            ? <BsFileEarmarkLock color="white" size={40}/>
                            : <a href={link} target="_blank">
                                <TbLink color="white" size={40} />
                            </a>
                        }
                    </div>
                </div>
                <div className="project-mid">
                    <img className="project-img" src={imgUrl} alt="img"/>
                </div>
                <div className="project-bot">
                    <Collapse accordion defaultActiveKey={[]} onChange={onChange} expandIconPosition="end">
                        <Panel header="Brief Description" key="1">
                            <p>{description}</p>
                        </Panel>
                        <Panel header="Technologies Used" key="2">
                            <p>{stacks}</p>
                        </Panel>
                        {
                            contributionsBE.length !== 0 &&
                            <Panel header="Backend Contributions" key="4">
                                <ul>
                                    {contributionsBE.map((contribution, id) => (
                                        <li key={id}>{contribution}</li>
                                        ))}
                                </ul>
                            </Panel>
                        }
                        {
                            contributionsFE.length !== 0 &&
                            <Panel header="Frontend Contributions" key="3">
                                <ul>
                                    {contributionsFE.map((contribution, id) => (
                                        <li key={id}>{contribution}</li>
                                    ))}
                                </ul>
                            </Panel>
                        }
                        {
                            contributionsDO.length !== 0 &&
                            <Panel header="DevOps Contributions" key="5">
                                <ul>
                                    {contributionsDO.map((contribution, id) => (
                                        <li key={id}>{contribution}</li>
                                    ))}
                                </ul>
                            </Panel>
                        }
                    </Collapse>
                </div>
            </Zoom>
        </div>
    )
}

export default Project;