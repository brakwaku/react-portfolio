import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from './media';
import musicWallpaper from './music/assets/music.jpg';
import corporateWallpaper from './corporate/assets/corporate.jpg';

const WelcomeScreen = () => {
  return (
    <MainWrapper>
      <NavLink to="/corporate">
        <CorporateWrapper>
          <h1>Corporate</h1>
        </CorporateWrapper>
      </NavLink>
      <NavLink to="/music">
        <MusicWrapper>
          <h1>Music</h1>
        </MusicWrapper>
      </NavLink>
    </MainWrapper>
  );
};

export default WelcomeScreen;

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  > a {
    text-decoration: none;
  }

  ${media.small`
        display: flex;
        flex-direction: column;
    `}
`;

const CorporateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.73),
      rgba(0, 0, 0, 0.7)
    ),
    url(${corporateWallpaper}) center no-repeat;
  background-size: cover;
  min-height: 100vh;

  > h1 {
    font-size: 5rem;
    font-weight: bolder;
    color: whitesmoke;
  }

  &:hover {
    cursor: pointer;
  }

  ${media.small`
    >h1 {
        font-size: 3.5rem;
    }
    min-height: 50vh;
  `}
`;

const MusicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.73),
      rgba(0, 0, 0, 0.7)
    ),
    url(${musicWallpaper}) center no-repeat;
  background-size: cover;
  min-height: 100vh;

  > h1 {
    font-size: 5rem;
    font-weight: lighter;
    color: whitesmoke;
  }

  &:hover {
    cursor: zoom-in;
  }

  ${media.small`
    min-height: 50vh;
  `}
`;
