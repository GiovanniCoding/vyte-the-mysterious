import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { GrMysql } from 'react-icons/gr';
import logoGedosal from '../assets/logo-gedosal.png'
import logoHSBC from '../assets/logo-hsbc.png'

export const Experiece = () => {
  return (
    <div className="bg-primary p-4">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2022 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img className="mt-4 ml-[0.37rem] w-[3rem]" src={ logoHSBC } />}
          position='left'
        >
          <h3 className="vertical-timeline-element-title">B2B Integrator</h3>
          <h4 className="vertical-timeline-element-subtitle">HSBC</h4>
          <p>
          Hired for the development, testing and maintenance of code for Geolocation in transaction environments, as well as the search for new lines of business with the use of this data.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2021 - 2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<img className="mt-2 ml-[0.35rem] w-[3rem]" src={ logoGedosal } />}
          position='right'
        >
          <h3 className="vertical-timeline-element-title">Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Gedosal</h4>
          <p>
          Hired for the data acquisition department and the implementation of machine learning models in Natural Language Processing for the detection of articles in violation of copyright.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - 2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          position='left'
        >
          <h3 className="vertical-timeline-element-title">Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Real Metrics</h4>
          <p>
          Hired for the migration to Python of the data acquisition department system and the design, development, assembly and maintenance of the automation of data acquisition for ecommerce portals
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}
