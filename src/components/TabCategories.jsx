import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';


const TabCategories = ({jobs}) => {
    return (
        <Tabs>
            <div className="container px-6 py-8 mx-auto ">
                <div className='text-center space-y-3 mb-5'>
                    <h1 className='text-3xl font-lato text-gray-800 font-semibold'>Browse Job By Categories</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Vero reiciendis saepe enim architecto culpa! <br /> </p>
                </div>
                <div className='flex justify-center items-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 mt-8 xl:mt-16'>
                        {jobs.filter(j => j.category === "Web Development").map(job => <JobCard key={job._id} job={job}></JobCard>)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 mt-8 xl:mt-16'>
                        {jobs.filter(j => j.category === "Graphics Design").map(job => <JobCard key={job._id} job={job}></JobCard>)}
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8 mt-8 xl:mt-16'>
                        {jobs.filter(j => j.category === "Digital Marketing").map(job => <JobCard key={job._id} job={job}></JobCard>)}
                    </div>
                </TabPanel>

            </div>
        </Tabs >


    );
};

export default TabCategories;