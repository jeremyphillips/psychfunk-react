import React , { useEffect, useState } from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import PostArtist from "./post-artist";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */

 const Theme = ({ state, libraries }) => {
   // Get information about the current URL.
   const data = state.source.get(state.router.link);

   // const [data2, setData] = useState({
   //   isReady: false,
   //   items: []
   // });

   // useEffect(() => {
   //   getCrate(libraries, state, setData);
   // }, []);

   // const images = data2.isReady && data2.items.map(({ type, id }) => state.source[type][id])

   return (
     <>
       {/* Add some metatags to the <head> of the HTML. */}
       <Title />
       <Head>
         <meta name="description" content={state.frontity.description} />
         <html lang="en" />
       </Head>

       {/* Add some global styles for the whole site, like body or a's. 
       Not classes here because we use CSS-in-JS. Only global HTML tags. */}
       <Global styles={globalStyles} />

       {/* Add the header of the site. */}
       <HeadContainer>
         <Header />
       </HeadContainer>

       {/* Add the main section. It renders a different component depending
       on the type of URL we are in. */}
       <Main>

        {
           // images && images.map(image => {
           //   return (
           //     <div>{image.title.rendered}</div>
           //   )  
           //   console.log(image.title.rendered)
           // })
          }
         <Switch>
           <Loading when={data.isFetching} />
           <List when={data.isArchive} />
           <PostArtist when={data.isArtist} />
           <Post when={data.isPostType} />
           <PageError when={data.isError} />
         </Switch>
       </Main>
     </>
   );
 };







export default connect(Theme)

// const getCrate2 = async (libraries, state, setData) => {

//   // Get other images
//   const response = await libraries.source.api.get({
//     endpoint: "crate",
//     params: {
//       language: 1026,
//     },
//   });
//   const entitiesAdded = await libraries.source.populate({ response, state });
//   await setData({
//     isReady: true,
//     items: entitiesAdded
//   });

// };

const GalleryWrapper = styled.div`
  background: red;
`;


const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
`;
