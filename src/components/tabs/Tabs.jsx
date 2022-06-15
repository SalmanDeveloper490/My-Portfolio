import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabsComponent = () => {
  return (
    <div id="projects-section" className="max-w-6xl mx-auto pb-12">
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Html / Css / Javascript</Tab>
          <Tab>Reactjs</Tab>
          <Tab>Nodejs</Tab>
          <Tab>Mern</Tab>
        </TabList>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
