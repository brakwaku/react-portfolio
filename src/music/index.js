import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const index = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <span>Twitter</span>
        <span>Insta</span>
      </div>
      <CategoryWrapper>
        <Originals>
          <img src="https://picsum.photos/id/1069/250/250" alt="nod" />
        </Originals>
        <Covers>
          <img src="https://picsum.photos/id/1011/250/250" alt="fdnf" />
        </Covers>
      </CategoryWrapper>
    </div>
  );
};

export default index;

const CategoryWrapper = styled.div`
  /* background: #ccc;
  display: grid;
  height: 100vh;
  grid-auto-flow: column;
  place-content: center;
  gap: 40px; */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Originals = styled.div`
  > img {
    --m: radial-gradient(circle farthest-side at right, #000 99%, #0000) 0 100%/46%
        92% no-repeat,
      radial-gradient(circle farthest-side at left, #000 99%, #0000) 100% 0/46%
        92% no-repeat;
    -webkit-mask: var(--m);
    mask: var(--m);
    filter: grayscale(0.5);
    transition: 0.3s linear;
    cursor: pointer;

    &:hover {
      -webkit-mask-position: 7.5% 50%, 92.5% 50%;
      mask-position: 7.5% 50%, 92.5% 50%;
      filter: grayscale(0);
    }
  }
`;

const Covers = styled.div`
  > img {
    --m: radial-gradient(circle farthest-side at right, #000 99%, #0000) 0 100%/46%
        92% no-repeat,
      radial-gradient(circle farthest-side at left, #000 99%, #0000) 100% 0/46%
        92% no-repeat;
    -webkit-mask: var(--m);
    mask: var(--m);
    filter: grayscale(0.5);
    transition: 0.3s linear;
    cursor: pointer;

    &:hover {
      -webkit-mask-position: 7.5% 50%, 92.5% 50%;
      mask-position: 7.5% 50%, 92.5% 50%;
      filter: grayscale(0);
    }
  }
`;
