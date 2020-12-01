import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";


const PostArtist = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  const [data2, setData] = useState({
    isReady: false,
    items: []
  });

  useEffect(() => {
    getCrate(libraries, state, setData, post);
  }, []);

  const images = data2.isReady && data2.items.map(({ type, id }) => state.source[type][id])


	return data.isReady && data2.isReady ? (
		<div>
			<Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

			<div>
			{
				images && images.map(image => {
				  return (
				    <div key={image.id}>{image.title.rendered}</div>
				  ) 
				})
			}
			</div>
		</div>
			
	) : null;
}

export default connect(PostArtist)

const getCrate = async (libraries, state, setData, post) => {

  const response = await libraries.source.api.get({
  	//api:'http://psychfunk.loc/wp-json/wp/v2/crate?filter[artis_tax]=los-fermons'
    endpoint: "crate",
    params: {
      // language: 1026,
      artist_tax_slug: post.slug
    },
  });

	console.log(response)

  const entitiesAdded = await libraries.source.populate({ response, state });

  await setData({
    isReady: true,
    items: entitiesAdded
  });

};



const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;

