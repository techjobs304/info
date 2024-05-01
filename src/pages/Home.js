import Landing from '../components/Landing';
import VariableSpacer from '../components/VariableSpacer';

import LandingImg from '../assets/coffee-and-code.jpg';
import Plot1 from '../assets/Plot1.png';
import Plot2 from '../assets/Plot2.png';
import Plot3 from '../assets/Plot3.png';

export default function Home() {
    return (
        <div>
            <VariableSpacer spaceHeight="1vh" />
            <div className="border-container">
                <Landing title="How has AI and COVID affected the Tech Job Market?" image={LandingImg} bgPosY="bottom" />
            </div>
            <div className="article-outer-container">
                <div className="article-container">
                    <VariableSpacer />
                    <h2 className='section-title'>About This Site</h2>
                    <p className='article-text'>This website serves as my final project for the course DSCI 304: Effective Data Visualization. For this project, I analyze COVID, the AI Boom and its Impact on the Tech Job Market. This <a href="https://www.kaggle.com/datasets/kidrulit/hackernews-who-is-hiring-listings-from-2018" rel="noreferrer" target="_blank" className='link'>Hackers News data set</a> from Kaggle.com shows job postings in tech and tech-adjacent fields from the years 2018 to 2023. Important variables include company, position, location, remote availability, language stack, and compensation. Through these variables, we can see different ways in which COVID and AI boom has affected job listings across different companies, locations, and pay ranges. The large time range (2018-2023) gives us pre and post-pandemic data, allowing us to see long-term changes that could be due to COVID, as well as the start of the AI boom.
                    Initially, I was compelled to research this topic after hearing about companies engaging in hiring freezes to save money for investment into AI. This made me wonder what the tech job climate would look like after graduation. Would it be difficult to get a job? Hence, I started to wonder how the AI boom has been affecting the tech industry so far and if I can see any trends that could help better prepare to enter the industry in the near future.</p>
                    <VariableSpacer />
                    <h2 className='section-title'>How has AI affected roles within the tech industry?</h2>
                    <p className="article-text">The histogram below shows how the number of AI-related job postings have changed over time. These postings are identified by AI-related keywords in the job posting or description. For instance, a job with the title of "Senior Machine Learning Engineer" would be classified as an AI-related job.</p>
                    <img src={Plot1} alt="AI vs. Non-AI Jobs" className="article-viz" />
                    <p className="article-text">The histogram is a bimodal and left-skewed. There are piques in the total number of jobs in 2018 and 2021, indicating spikes in industry popularity and job demand. The chart also shows that AI related job postings have been relatively the same throughout the time period, with Non-AI related jobs dominating the market. The data leaves us with two potential hypotheses, companies are yet to invest their savings into the AI roles, or they are placing all of their investments into a few highly skilled and experienced employees.</p>
                    <br />
                    <hr></hr>
                    <br />
                    <p className="article-text">In order to further investigate how companies are investing their money into AI, we can visualize how jobs requirements have evolved. The histogram below shows how the number of jobs that require AI skills have changed over time. These job postings are identified by AI-related skills, keywords, and softwares in the job description. For instance, a job description containing "Natural Language Processing" or "NLP" would be classified as job that requires AI skills.</p>
                    <p className="article-text">Including this histogram serves as a double-checking mechanism. If there are few jobs names with AI-keywords, we can investigate job descriptions and required skills to see if companies are investing in AI by adding AI skills to existing roles.</p>
                    <img src={Plot2} alt="Demand for AI Skills" className="article-viz" />
                    <p className="article-text">The graph closely shadows the previous one. Once again, we can see potential spikes in industry popularity and job demand in 2018 and 2021. This reinforces our suspicion that companies are yet to invest their savings into AI roles, or they are placing all of their investments into a few highly skilled an experienced employees.</p>
                    <VariableSpacer />
                    <h2 className='section-title'>What will AI jobs look like in the future.</h2>
                    <p className="article-text">So far, we have found that companies are yet to mass-invest in the AI workforce. Next, we will investigate factors that are contributing to the growth in AI jobs. Understanding the factors most closely associated with a career in AI could give us a cohesive picture on what we can expect AI jobs to look like in the future. Through a regression analysis, we can see which attributes are most closely tied to AI-related jobs.</p>
                    <p className="article-text">First, we will look at factors that influence jobs with AI-keywords in their title. Specifically, lets investigate whether AI jobs are part-time available, remote available, or contracted out. Since all of these variables are binary and discrete (i.e. either True or False), we can use a logistic regression model to see what types of jobs are likely to be classified as AI jobs.</p>
                    <p className='article-text'>A logistic regression reveals a statistically significant result - jobs that are contracted out are more likely to be classified as AI jobs.</p>
                    <img src={Plot3} alt="AI Jobs are Contracted Out" className="article-viz" />
                    <p className="article-text">Although the plot shows some uncertainty with jobs that are contracted out (i.e. the TRUE values), we can see that the TRUE and FALSE bars do not overlap, confirming statistical significance in the results. Through this, we can conclude contractor jobs are more likely to be AI classified. Thus, in the future, we can expect a good portion of AI-related jobs to be contracted out . This means that tech companies could potentially be investing in overseas contractors to build their AI systems for a cheaper price compared to in-house employees. This could also be due to specialized skills that only AI contractors possess, or because contracting is more common in the subindustries that are investing in AI. Unfortunately, due to the poor classification of subindustries in the dataset, we cannot conclusively determine which subindustries are investing most into AI, as there are too many overlapping/similar subindustries.</p>
                    <VariableSpacer />
                    <p className="section-title">The Emergence of AI Companies</p>
                    <p className="article-text">So far, we can concluded that AI work tends to be contracted out. This leads to the question, why are these companies investing in cheap and temporary labor over committed employees? Could most of these companies employing AI contractors be startups with little financial freedom? Through a time series plot, we can visualize the effects of AI on tech startups.</p>
                    <img src={Plot3} alt="AI Jobs are Contracted Out" className="article-viz" />
                </div>
            </div>
        </div>
    )
}