import { Fragment } from 'react';
import { ga } from '../../helpers/utils';

const RenderProject = ({ project, googleAnalytics }) => {
  console.log(project);
  return (
    <a
      className="card shadow-lg compact bg-base-100 cursor-pointer"
      href={project.link}
      onClick={(e) => {
        e.preventDefault();

        try {
          if (googleAnalytics?.id) {
            ga.event({
              action: 'Click project',
              params: {
                project: project.title,
              },
            });
          }
        } catch (error) {
          console.error(error);
        }

        window?.open(project.link, '_blank');
      }}
    >
      <img class="rounded-t-lg" src={project.img} alt={project.title} />
      <div class="p-5">
        <h5 className="card-title text-lg text-base-content">
          {project.title}
        </h5>
        <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
          {project.description}
        </p>
      </div>
    </a>
  );
};

const RenderProjects = ({ projects, googleAnalytics }) => {
  let array = [];

  projects.map((project, index) => {
    console.log(index);
    array.push(
      <div key={index}>
        <RenderProject project={project} googleAnalytics={googleAnalytics} />
      </div>
    );
  });

  return array;
};

const Projects = ({ workingon, googleAnalytics }) => {
  // console.log(workingon);
  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-gradient-to-br to-base-200 from-base-100 shadow">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    <span className="text-base-content opacity-70">
                      Projects i'm working on
                    </span>
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <RenderProjects
                      projects={workingon}
                      googleAnalytics={googleAnalytics}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
