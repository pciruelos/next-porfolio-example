import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experience, projects } from "../profile";

const Index = () => {
  return (
    <Layout>
      {/**Header Card */}
      <header className="row py-1">
        <div className="col-md-12">
          <div className="card card-body bg-primary">
            <div className="row">
              <div className="col-md-4">
                <img src="1.jpg" alt="Pablo Ciruelos" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Pablo Nicolas Ciruelos</h1>
                <h3>React Developer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  error rerum! Aliquam ducimus, doloribus esse aliquid officiis,
                  deserunt harum eius odio maxime vero, ea vel quos pariatur
                  dolorem eos unde.
                </p>
                <a href="/hireme">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/** Second Section */}

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bh-light">
            <div className="card-body style=">
              <h4 className="text-center">Skills</h4>

              {skills.map((s, i) => (
                <div className="py-3" key={i}>
                  <h6>{s.skill}</h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${s.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bh-light">
            <div className="card-body">
              <h4>Experience </h4>
              <ul>
                {experience.map((e, i) => (
                  <li key={i}>
                    <h5>{e.title}</h5>
                    <h6>
                      {e.from}-{e.to}
                    </h6>
                    <p>
                      {e.description}{" "}
                      <Link href={e.link}>
                        <a>Link of interest</a>
                      </Link>
                      ;
                    </p>
                  </li>
                ))}
              </ul>
              <Link href="/fullcv">
                <a className="btn btn-sm btn-primary">Know more!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/** Portfolio */}
      <div className="row py-2">
        <div className="col-md-12">
          <div className="">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light ">Portfolio</h1>
              </div>
              {projects.map((e,i) => <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                  <img src={`/${e.image}`} alt="" className="card-img-top"/>
                  </div>
                  <div className="card-body">
                    <h4>{e.name}</h4>
                    <p>{e.descripcion}</p>
                    <a href="/">know more</a>
                  </div>
                </div>
              </div> )}
            </div>
          </div>
          
            <div className="text-center">
              <Link href="/portfolio">
              <a className="d-grid gap-2 btn btn-outline-light">More projects</a>
              </Link>
            </div>

          
        </div>
      </div>

      {/** Portfolio */}


      <h1>index jsx ( children ) inside layout </h1>

    </Layout>
  );
};

export default Index;
