import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";

export function TimelineCommon() {
    return (
  <>
  <VerticalTimeline lineColor="#ECF5FC" layout="2-columns">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10th January 2023"
          icon="💜"
          iconStyle={{ background: "#ECF5FC" }}
        >
          <img
            src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
            alt="Event 1"
            className="w-full rounded-3xl h-96 object-cover"
          />
          <p className="text-blue-900">Description for event 1 goes here.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10th January 2023"
          icon="💜"
          iconStyle={{ background: "#ECF5FC" }}
        >
          <h3 className="vertical-timeline-element-title">Event Title 2</h3>
          <img
            src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
            alt="Event 2"
            className="w-full rounded-3xl h-96 object-cover"
          />
          <p className="text-blue-900">Description for event 2 goes here.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10th January 2023"
          icon="💜"
          iconStyle={{ background: "#ECF5FC" }}
        >
          <h3 className="vertical-timeline-element-title">Event Title 3</h3>
          <img
            src="https://top10tphcm.com/wp-content/uploads/2023/02/gai-dep-nhat-viet-nam-6.jpg"
            alt="Event 3"
            className="w-full rounded-3xl h-96 object-cover"
          />
          <p className="text-blue-900">Description for event 3 goes here.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
  </>
    );
  }