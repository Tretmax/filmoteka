import { useQuery, gql } from "@apollo/client";
const apiKey = 'd23d4b7b4bd87a86061ee4ca60b78e9a'

const GET_LOCATIONS = gql`
  query popularMovies {
    movies {
      id
      adult
      original_title
    }
  }
`;
const CurrentFilm = () => {
  //    const result = gql`
  //         query movie_id {
  //           name
  //         }
  //       `;

  //     console.log(result);

  //   client
  //   .query({
  //     query: gql`
  //       query GetLocations {
  //         locations {
  //           id
  //           name
  //           description
  //           photo
  //         }
  //       }
  //     `,
  //   })
  //   .then((result) => console.log(result));

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};
export default CurrentFilm;
