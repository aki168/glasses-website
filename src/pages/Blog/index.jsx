import Navbar from '../../components/Navbar';
import Title from '../../components/Title'
import Footer from '../../components/Footer';
import BlogData from '../../data/BlogData';
import BlogCard from '../../components/BlogCard';
import { nanoid } from 'nanoid';

export default function Blog() {

  const blogcards = BlogData.map(item=>{
    return(
      <BlogCard
        key={nanoid()}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <main className="my-container py-10 md:py-20 leading-normal">
        <Title text="部落格" />
        {blogcards}
      </main>
      <Footer />
    </>
  )
}