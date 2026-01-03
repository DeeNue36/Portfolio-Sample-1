import { Settings, CropRotate, ViewInAr, PieChart, Code, BarChart, CloudOutlined, FavoriteBorder, Public, PersonOutlined, AddLocationAltOutlined,
PhoneIphone, EmailOutlined, Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material"


export const navlinks = [
    {
        url: "/",
        text: "Home",
    },
    {
        url: "/about",
        text: "About",
    },
    {
        url: "/services",
        text: "Services",
    },
    {
        url: "/portfolio",
        text: "Portfolio",
    },
    {
        url: 'testimonials',
        text: 'Testimonials',
    },
    {
        url: '/blog',
        text: 'Blog',
    },
    {
        url: '/contact',
        text: 'Contact',
    }
]

export const home = [
    {
        text: 'Welcome to my Haven',
        name: 'My name is Dugidem Egwuatu',
        post: 'A Frontend Developer',
        shortDesc: 'I enjoy building things for the web',
        longDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores porro nostrum enim tenetur sequi aliquam dolor nemo, nisi harum esse ducimus similique, ipsam quo! Sequi odit libero rerum quis itaque.",
    },
]

export const about = [
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et non doloribus voluptate eveniet. Ipsa exercitationem provident quos quibusdam ad id aperiam voluptatibus illo nesciunt consectetur error, assumenda cupiditate. Voluptatum?",
        desc1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et enim officiis maiores quae nesciunt? Animi, voluptatem. Esse minima optio dolor autem, quod, eos quas cumque molestias similique, pariatur error! Temporibus!",
        cover: "../../assets/images/creative_1.jpg"
    },
]

export const services = [
    {
        id: 1,
        icon: <Settings />,
        title: "Web Development",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
    },
    {
        id: 2,
        icon: <CropRotate />,
        title: "Clean Code",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
    },
    {
        id: 3,
        icon: <ViewInAr />,
        title: "Responsive Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
    },
    {
        id: 4,
        icon: <PieChart />,
        title: "Performance Optimization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
    },
    {
        id: 5,
        icon: <Code />,
        title: "CSS Processors(Tailwind, Bootstrap etc.)",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
    },
    {
        id: 6,
        icon: <BarChart />,
        title: "Amazing Support",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
    },
]

export const projects = [
    {
        id: 1,
        icon: <CloudOutlined />,
        num: "12",
        title: "Happy Clients",
    },
    {
        id: 2,
        icon: <FavoriteBorder />,
        num: "16",
        title: "Projects Completed",
    },
    {
        id: 3,
        icon: <Public />,
        num: "4+",
        title: "Years of Experience",
    },
    {
        id: 4,
        icon: <PersonOutlined />,
        num: "12k+",
        title: "Lines of Code Written",
    }
]

export const portfolio = [
    {
        id: 1,
        cover: "../../assets/images/blog_website.jpg",
        name: "Africana Leadership Digest",
        category: "Blog",
        title: "ALD",
    },
    {
        id: 2,
        cover: "../../assets/images/school_website.jpg",
        name: "School of Transformational Leadership",
        category: "Education",
        title: "SoTL",
    },
    {
        id: 3,
        cover: "../../assets/images/home_appliances_website.jpg",
        name: "Andrakk",
        category: "E-commerce",
        title: "Andrakk",
    },
    {
        id: 4,
        cover: "../../assets/images/jewelry_website.jpg",
        name: "MayGems!",
        category: "E-commerce",
        title: "MayGems!",
    }
]

export const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
        image: "../../assets/images/testimonial_1.jpg",
        post: "Owner - Lorem",
    },
    {
        id: 2,
        name: "Olusegun Osineye",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
        image: "../../assets/images/testimonial_2.jpg",
        post: "Founder - ALD",
    },
    {
        id: 3,
        name: "Nduka Egwuatu",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat.",
        image: "../../assets/images/testimonial_3.jpg",
        post: "CEO - Andrakk",
    },
]

export const blog = [
    {
        id: 1,
        title: "Master These Awesome",
        date: "Jun 7, 2025",
        author: "Dugidem Egwuatu",
        desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
        cover: "../../assets/images/blog/b1.jpg",
    },
    {
        id: 2,
        title: "Best Design Items to Appeal",
        date: "Jul 24, 2025",
        author: "Dugidem Egwuatu",
        desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
        cover: "../../assets/images/blog/b2.jpg",
    },
    {
        id: 3,
        title: "The 20 Best Lightroom Presets",
        date: "Oct 16, 2025",
        author: "Dugidem Egwuatu",
        desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
        cover: "../../assets/images/blog/b3.jpg",
    },
]

export const contact = [
    {
        icon: <AddLocationAltOutlined />,
        text1: "1024 Lorem Ipsum Street, Suit 16",
        text2: "New York, NY 10001",
    },
    {
        icon: <PhoneIphone />,
        text1: "+1 234 567 890",
        text2: "+1 324 675 980",
    },
    {
        icon: <EmailOutlined />,
        text1: "dugi@example.com",
        text2: "dugiinfo@example.com",
    },
]

export const social = [
    {
        icon: <Facebook />,
        link: "https://www.facebook.com/",
    },
    {
        icon: <Twitter />,
        link: "https://twitter.com/",
    },
    {
        icon: <Instagram />,
        link: "https://www.instagram.com/",
    },
    {
        icon: <YouTube />,
        link: "https://www.youtube.com/",
    },
]