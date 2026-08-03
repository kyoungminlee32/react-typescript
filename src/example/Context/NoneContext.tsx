import { GrandParent } from '../../components/ContextExample/NonContext/GrandParent';

export const NoneContext = () => {
  return (
    <>
      <GrandParent value='Hello World' age={25} />
    </>
  );
};

export default NoneContext;
