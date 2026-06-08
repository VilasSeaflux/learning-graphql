import React from "react";
import { Layout, QueryResult } from "../components";

import { useQuery } from "@apollo/client/react";
import TrackCard from "../containers/track-card";
import { gql } from "@apollo/client";
import { Track } from "../__generated__/types";

const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`);
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  console.log("data", data);
  if (loading) return "Loading";

  if (error) return "Error";
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: Track) => (
          <TrackCard track={track} />
        ))}{" "}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
