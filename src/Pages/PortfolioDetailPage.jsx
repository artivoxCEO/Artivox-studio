import React from 'react'
import { useParams } from 'react-router-dom';
import { portfolioProjects } from "../Data/portfolioData";
import Portfolio_Data_page from '../Components/Portfolio_Data_page';

const PortfolioDetailPage = () => {
 const { slug } = useParams();

  const project = portfolioProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <h1 className='text-white min-h-screen flex items-center justify-center text-5xl font-bold'>Project Not Found</h1>;
  }

  return <Portfolio_Data_page project={project} />;
};


export default PortfolioDetailPage
