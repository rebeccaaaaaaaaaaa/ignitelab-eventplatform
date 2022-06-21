import { gql, useQuery} from "@apollo/client";

const GET_LESSIONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lession {
  id: string;
  title: string;
}

export default function App(){

  const { data } = useQuery<{lessons: Lession[]}>(GET_LESSIONS_QUERY);
  console.log(data);

  return(
    <>
    <ul>
      {
        data?.lessons.map(lesson => (
          <li key={lesson.id}>{lesson.title}</li>
        ))
      }
    </ul>
    </>
  )
}
