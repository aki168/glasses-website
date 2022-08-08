import Navbar from '../../components/Navbar';
import Title from '../../components/Title'
import Footer from '../../components/Footer';
import BlogData from '../../data/BlogData';
import BlogCard from '../../components/BlogCard';
import SubNav from './SubNav';
import { nanoid } from 'nanoid';


export default function Blog() {

  const blogCards = BlogData.map(item => {
    return (
      <BlogCard
        key={nanoid()}
        // getArticleDetail={getArticleDetail}
        {...item}
      />
    )
  })



  return (
    <>
      <Navbar />
      <SubNav />
      <main className="my-container py-10 md:py-20 leading-normal">
        <Title text="部落格" />
        {blogCards}
      </main>
      <Footer />
    </>
  )
}