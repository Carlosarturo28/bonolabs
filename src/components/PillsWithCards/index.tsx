import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Card from "./card";

const tabData = [
  {
    label: "UX/UI Design",
    title: "Designing an Unforgettable Experience",
    image: "https://images.pexels.com/photos/3822113/pexels-photo-3822113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Unforgettable experiences start with great design. At Bono, our UX/UI experts craft engaging and intuitive interfaces that keep customers coming back. Whether you need a redesign or a brand new product, our team brings your vision to life.",
  },
  {
    label: "Development",
    title: "Building Solutions that Stand the Test of Time",
    image: "https://images.pexels.com/photos/3822113/pexels-photo-3822113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "we build products that stand the test of time. Our team of developers are experts in various programming languages and frameworks, ensuring tailored solutions that meet your specific needs.",
  },
  {
    label: "DevOps",
    title: "Streamlining Your Workflow",
    image: "https://images.pexels.com/photos/3822113/pexels-photo-3822113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Efficiency is key in today's fast-paced digital world. Our DevOps experts specialize in streamlining your workflow and automating repetitive tasks, allowing your team to focus on what they do best. We provide continuous integration and deployment, monitoring, and scaling solutions to ensure that your systems are running smoothly and reliably.",
  },
  {
    label: "Scalability",
    title: "Scaling Your Business for Success",
    image: "https://images.pexels.com/photos/3822113/pexels-photo-3822113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "We build scalable solutions that grow with your business. Our experts specialize in creating systems that handle increased traffic and data while maintaining top performance and security. Scale your business with confidence, launch new products, and expand your customer base – we're here to help.",
  },
  {
    label: "Security",
    title: "Shield Your Business from Cyber Threats",
    image: "https://images.pexels.com/photos/3822113/pexels-photo-3822113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "Defend Your Business with Our Custom Cybersecurity Solutions. Our experts use the latest tech to identify and mitigate risks, from vulnerability assessments to managed security services. Protect your systems and data from cyber threats with our tailored solutions that meet your specific needs.",
  },
];

const PillsWithCards = () => {
  return (
    <Tabs display="flex" flexDir="column" align="center" variant="soft-rounded">
      <TabList flexWrap="wrap">
        {tabData.map((tab, index) => (
          <Tab
          p={4}
          mx={2}
          mt={[4, 0, 0]}
            key={index}
            borderColor= "white"
            borderWidth={2}
            _hover={{ transform: "translateY(-2px)", borderColor: "blue.300", transition: "all .4s"}}
            _selected={{ borderColor: "blue.500", bg: "white" }}
            bgColor="gray.100"
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabData.map((tab, index) => (
          <TabPanel key={index}>
            <Card image={tab.image} title={tab.title} content={tab.content} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default PillsWithCards;
