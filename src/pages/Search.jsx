import React from "react";
import SearchBar from "../components/SearchBar";

function Search() {
  return (
    <div>
      <section>
        <section className="search">
          <h1>Search Page</h1>

          <img
            className="srchImg"
            src={
              "https://64.media.tumblr.com/e642f1a4554b60222d12dcac2a37777d/25a8e056a8a41d67-ea/s400x600/75ac973e614f765f4f32d885785b776aea266374.gif"
            }
            alt=""
          />

          <SearchBar />
        </section>

        {/* <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          praesentium, laboriosam officia sint est eum temporibus, dolorum esse
          consequatur reiciendis inventore neque hic nesciunt, ut exercitationem
          quaerat molestiae ad reprehenderit. Dolorem corrupti quam officia
          quaerat laudantium et vitae dolorum! Adipisci?
        </h2> */}
      </section>
    </div>
  );
}

export default Search;
