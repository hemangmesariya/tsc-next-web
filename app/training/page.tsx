import Banner from './banner';
import Blogs from './blogs';
import Courses from './courses';
import Perks from './perks';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Banner />
      <Courses />
      <Blogs />
    </>
  );
};

export default Page;
