import { FaBeer, FaVaadin } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';

export const WorkExperience = ({ WorkExperienceRef }) => {
  return (
    <section ref={ WorkExperienceRef } className="py-8 bg-primary">
      <h1 className="text-5xl pl-24 py-8 text-tprimary">Work Experience</h1>
      <VerticalTimeline
        lineColor="#A03E99"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A03E99', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #A03E99' }}
          date="2022 - present"
          iconStyle={{ background: '#A03E99', color: '#fff' }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">B2B Integrator</h3>
          <h4 className="vertical-timeline-element-subtitle">HSBC</h4>
          <p>
            Hired for the development, testing and maintenance of code for Geolocation in transaction environments, as well as the search for new lines of business with the use of this data.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A03E99', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #A03E99' }}
          date="2021 - 2022"
          iconStyle={{ background: '#A03E99', color: '#fff' }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Gedosal</h4>
          <p>
            Hired for the data acquisition department and the implementation of machine learning models in Natural Language Processing for the detection of articles in violation of copyright.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#A03E99', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #A03E99' }}
          date="2018 - 2019"
          iconStyle={{ background: '#A03E99', color: '#fff' }}
          icon={<FaBeer />}
        >
          <h3 className="vertical-timeline-element-title">Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Real Metrics</h4>
          <p>
            Hired for the migration to Python of the data acquisition department system and the design, development, assembly and maintenance of the automation of data acquisition for ecommerce portals.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  )
}
