import React from 'react';
import styled from 'styled-components';
import media from '../../media';

const OutterWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  gap: 1rem;
  row-gap: 1.5rem;
  column-gap: 1.5rem;
  padding-top: 1.2rem;

  ${media.small`
    display: flex;
        flex-direction: column;
    `}
`;

const MainProjectWrapper = styled.div`
  // max-width: 92%;
  background: #143149;
  color: #95a1c5;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.7s ease-out;
  // transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.5s box-shadow, 0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);

  &:hover {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transform: scale(1.2);
  }

  ${media.small`
    &:hover {
            transform: scale(1.03);
        }
    `}
`;

const IconWrapper = styled.div`
  display: flex;
`;

const ProjTitle = styled.h6`
  color: #aebbe4;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

const TextWrapper = styled.div``;

const TechnologiesWrapper = styled.div`
  font-size: 0.67rem;
  opacity: 0.7;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 0 0;
  gap: 1rem;
  font-style: oblique;
`;

const EachIcon = styled.div`
  > a > img {
    margin: 0 3rem 0 0;
    width: 2.5rem;
    transition: all 1.4s;

    &:hover {
      transform: scale(1.4);
      // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      filter: hue-rotate(55%);
    }
  }
`;

const ExperienceListWrapper = styled.ul`
  color: #95a1c5;
  margin: 15px 0px 0px 0px;
  list-style: none;
  padding-left: 0;
`;

const ExperienceList = styled.li`
  font-family: 'Cabin Condensed', sans-serif;
  font-size: 0.7rem;
  &:before {
    content: '▹ ';
    color: rgb(222, 184, 135);
    font-size: 0.8rem;
    margin: 0 0.5rem 0 0;
  }

  > a {
    text-decoration: none;
    transition: all 1.4s;
    &:hover {
      transform: scale(1.4);
    }
  }
`;

const Volunteer = () => {
  return (
    <OutterWrapper>
      <MainProjectWrapper>
        <IconWrapper>
          <ProjTitle>BYU-I | Heber J. Grant Mentor</ProjTitle>
        </IconWrapper>
        <TextWrapper>
          <ExperienceListWrapper>
            <ExperienceList>
              Mentored new incoming students in setting goals and making plans
              for a smooth transition into college to achieve academic success
              and beyond
            </ExperienceList>
            <ExperienceList>
              Met regularly with those students to follow up on goals made and
              provide emotional support
            </ExperienceList>
            <ExperienceList>
              Collaborated with a team of over 10 mentors weekly to discuss and
              plan how to improve overall mentors' techniques..
            </ExperienceList>
          </ExperienceListWrapper>
          <TechnologiesWrapper>
            <p>Service</p>
            <p>Time Management</p>
            <p>Communication</p>
            <p>Motivation</p>
          </TechnologiesWrapper>
        </TextWrapper>
      </MainProjectWrapper>

      <MainProjectWrapper>
        <IconWrapper>
          <ProjTitle>Children Are Reason Enough | Volunteer</ProjTitle>
        </IconWrapper>
        <TextWrapper>
          <ExperienceListWrapper>
            <ExperienceList>
              Worked with team members to provide education supplies for
              children in need.
            </ExperienceList>
            <ExperienceList>
              Led event planning and execution of plans despite a lack of
              resources.
            </ExperienceList>
            <ExperienceList>
              Collaborated with executives to create an environment that
              promotes self motivation by volunteers.
            </ExperienceList>
          </ExperienceListWrapper>
          <TechnologiesWrapper>
            <p>Time Management</p>
            <p>Leadership</p>
            <p>Self motivation</p>
            <p>Service</p>
          </TechnologiesWrapper>
        </TextWrapper>
      </MainProjectWrapper>

      <MainProjectWrapper>
        <IconWrapper>
          <ProjTitle>BuildingFit | Fullstack developer</ProjTitle>
        </IconWrapper>
        <TextWrapper>
          <ExperienceListWrapper>
            <ExperienceList>
              Collaborated with other developers to build a modern{' '}
              <a
                href="https://buildingfit.com"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>{' '}
              for the company.
            </ExperienceList>
            <ExperienceList>
              Leverage HTML, CSS, JS and WP to build a website consistent with
              UX design best practices.
            </ExperienceList>
            <ExperienceList>
              Collaborated efforts through regular meetings and consultation in
              an agile development environment.
            </ExperienceList>
          </ExperienceListWrapper>
          <TechnologiesWrapper>
            <p>Team-work</p>
            <p>Self motivation</p>
            <p>Innovation</p>
            <p>Problem-solving</p>
          </TechnologiesWrapper>
        </TextWrapper>
      </MainProjectWrapper>

      <MainProjectWrapper>
        <IconWrapper>
          <EachIcon></EachIcon>
          <ProjTitle>Self Reliance Center | Supervisor & Mentor</ProjTitle>
        </IconWrapper>
        <TextWrapper>
          <ExperienceListWrapper>
            <ExperienceList>
              Developed leadership, speaking and presentation skills to educate
              8 service leaders.
            </ExperienceList>
            <ExperienceList>
              Mentored patrons on possible great educational and career paths
              for a better future.
            </ExperienceList>
            <ExperienceList>
              Collaborated with permanent staff to enhance center productivity
              and efficiency.
            </ExperienceList>
          </ExperienceListWrapper>
          <TechnologiesWrapper>
            <p>Communication</p>
            <p>Leadership</p>
            <p>Training</p>
            <p>Mentorship</p>
            <p>Time Management</p>
          </TechnologiesWrapper>
        </TextWrapper>
      </MainProjectWrapper>
    </OutterWrapper>
  );
};

export default Volunteer;
