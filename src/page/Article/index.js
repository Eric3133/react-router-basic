import { useSearchParams, useParams } from "react-router-dom";
const Article = () => {
  // const [params] = useSearchParams();
  // const id = params.get('id');
  // const name = params.get('name');
  const params = useParams();
  return <div>this is article {params.id} {params.name}</div>
}

export default Article;
