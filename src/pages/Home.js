import Landing from '../components/Landing';
import VariableSpacer from '../components/VariableSpacer';

import LandingImg from '../assets/coffee-and-code.jpg';
import Plot1 from '../assets/Plot1.png';
import Plot2 from '../assets/Plot2.png';
import Plot3 from '../assets/Plot3.png';
import Plot4 from '../assets/Plot4.png';
import Plot5 from '../assets/Plot5.png';

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
                    <p className='article-text' id="#about">This website serves as my final project for the course DSCI 304: Effective Data Visualization. For this project, I analyze COVID, the AI Boom and its Impact on the Tech Job Market. This <a href="https://www.kaggle.com/datasets/kidrulit/hackernews-who-is-hiring-listings-from-2018" rel="noreferrer" target="_blank" className='link'>Hackers News data set</a> from Kaggle.com shows job postings in tech and tech-adjacent fields from the years 2018 to 2023. Important variables include company, position, location, remote availability, language stack, and compensation. Through these variables, we can see different ways in which COVID and AI boom has affected job listings across different companies, locations, and pay ranges. The large time range (2018-2023) gives us pre and post-pandemic data, allowing us to see long-term changes that could be due to COVID, as well as the start of the AI boom.
                    Initially, I was compelled to research this topic after hearing about companies engaging in hiring freezes to save money for investment into AI. This made me wonder what the tech job climate would look like after graduation. Would it be difficult to get a job? Hence, I started to wonder how the AI boom has been affecting the tech industry so far and if I can see any trends that could help better prepare to enter the industry in the near future.</p>
                    <VariableSpacer />
                    <h2 className='section-title'>How has AI affected roles within the tech industry?</h2>
                    <p className="article-text" id="#impact-on-tech-roles">The histogram below shows how the number of AI-related job postings have changed over time. These postings are identified by AI-related keywords in the job posting or description. For instance, a job with the title of "Senior Machine Learning Engineer" would be classified as an AI-related job.</p>
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
                    <p className="article-text" id="#ai-jobs-future">So far, we have found that companies are yet to mass-invest in the AI workforce. Next, we will investigate factors that are contributing to the growth in AI jobs. Understanding the factors most closely associated with a career in AI could give us a cohesive picture on what we can expect AI jobs to look like in the future. Through a regression analysis, we can see which attributes are most closely tied to AI-related jobs.</p>
                    <p className="article-text">First, we will look at factors that influence jobs with AI-keywords in their title. Specifically, lets investigate whether AI jobs are part-time available, remote available, or contracted out. Since all of these variables are binary and discrete (i.e. either True or False), we can use a logistic regression model to see what types of jobs are likely to be classified as AI jobs.</p>
                    <p className='article-text'>A logistic regression reveals a statistically significant result - jobs that are contracted out are more likely to be classified as AI jobs.</p>
                    <img src={Plot3} alt="AI Jobs are Contracted Out" className="article-viz" />
                    <p className="article-text">Although the plot shows some uncertainty with jobs that are contracted out (i.e. the TRUE values), we can see that the TRUE and FALSE bars do not overlap, confirming statistical significance in the results. Through this, we can conclude contractor jobs are more likely to be AI classified. Thus, in the future, we can expect a good portion of AI-related jobs to be contracted out. This means that tech companies could potentially be investing in overseas contractors to build their AI systems for a cheaper price compared to in-house employees. This could also be due to specialized skills that only AI contractors possess, or because contracting is more common in the subindustries that are investing in AI. Unfortunately, due to the poor classification of subindustries in the dataset, we cannot conclusively determine which subindustries are investing most into AI, as there are too many overlapping/similar subindustries.</p>
                    <VariableSpacer />
                    <p className="section-title">The Emergence of Remote Work and AI Contractors</p>
                    <p className="article-text" id="remote-contractors">So far, we can concluded that AI work tends to be contracted out. What can we do to confirm our suspicion that AI companies are investing in AI through cheap contractor labor from remote/overseas. To visualize the effects, we can create a plot that allows us to examine how the effect of being a contractor affects the likelihood of a job being AI-related changes when it is remote vs. non-remote.</p>
                    <img src={Plot4} alt="AI jobs are remote and contracted out" className="article-viz" />
                    <p className="article-text">The chart reveals that for remote jobs, increasing contractor status (i.e. making it contracted out), increases the likelihood of a job being an AI job. As we hypothesized before, overseas contractor labor could be a cheaper more efficient way to build AI systems.</p>
                    <VariableSpacer />
                    <p className="section-title" id="conclusions and predictions">Conclusions and Predictions</p>
                    <ol>
                        <li className="article-text"><b>The Job Market is still mostly composed of Non-AI Jobs: </b>Despite spikes in the tech industry's popularity and hiring in 2018 and 2021, AI-related jobs have not been dominating the market. Most jobs are not AI-related, suggesting that many companies might still be in the early stages of integrating AI tech into their operations, or are concentrating their investments into few high-skill employees.</li>
                        <li className="article-text"><b>Demand for AI Skills: </b>Our analysis of job requirements show a similar trend. Demand for AI skills piqued around the same time as the industry's growth in popularity. This indicates a slow yet growing importance and emphasis on AI skills in the tech industry.</li>
                        <li className="article-text"><b>Outsourcing AI Jobs: </b>Our logistic regression analysis revealed that AI-related jobs are more likely to be contracted out, especially when they are remote. This suggests that companies are strategically investing in remote and overseas contractors, getting both specialized skills and lower costs in the process.</li>
                        <li className="article-text"><b>Future Trends in AI Employment: </b>The data indicates that as companies continue to embrace AI, they might shift towards a more contracted and remote workforce. This trend could influence future job availability in tech. Companies can cut costs by reducing the number of non-AI employees they have. They can then invest a small portion of these savings into outsourced AI-related labor, giving them money to spare to invest into other aspects of AI innovation, such as computing, data sourcing, and more.</li>
                    </ol>
                    <img src={Plot5} alt="conclusions and predictions concept map" className="article-viz" />
                    <p className="article-text">The chart above shows how the COVID-19 Pandemic began a major shift in the tech job market. Companies realized that remote work could be equally as profitable as in-office work. Both the COVID-19 pandemic and the AI-boom led to many job market analyses that ultimately revealed new developments in remote work. In our analysis, we found that companies needed more employees with AI skills, but due to cost and lack of specialty, they likely contracted the labor out to remote overseas workers. These workers probably have a specialized skillset in AI and are willing to accept a much smaller salary than in-office workers. While some of these conclusions about outsourced work are yet to proven, our analysis definetely shows potential in the remote and contractor-driven tech job segments moving forward. As mentioned previously, this means companies can invest a small portion of these savings into outsourced AI-related labor, giving them money to spare to invest into other aspects of AI innovation, such as computing, data sourcing, and more.</p>
                    <VariableSpacer />
                </div>
            </div>
        </div>
    )
}