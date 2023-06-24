import { FaGithub } from 'react-icons/fa'

const About = () => {
    return (
        <div className="page">
            <h1 className="title">About</h1>
            <div className="content w-7/12 text-2xl">
                <p>
                    <strong>IMPORTANT:</strong> Make sure to also visit the
                    admin dashboard at <a href="/admin">/admin</a>
                </p>
                <p>
                    This project was created within a week by Kostas Tsakaleris
                    as the final assignment for the TechPro Academy bootcamp in
                    June 2023.
                </p>
                <p>
                    The project is a simple e-shop with a React frontend that
                    communicates with a REST API. The frontend is written in
                    TypeScript and uses Tailwind CSS for styling. The backend is
                    written in Java and uses Spring Boot with Spring Data JPA
                    for the REST API. The database is a MySQL database that is
                    hosted in Docker and is connected to the backend with Spring
                    Data JPA.
                </p>
                <p className="flex justify-center items-center gap-2">
                    <FaGithub className="inline" />
                    <span>
                        The project is hosted on GitHub{' '}
                        <a href="https://github.com/tsakalerisk/Final-Project">
                            here
                        </a>
                        .
                    </span>
                </p>
            </div>
        </div>
    )
}

export default About
