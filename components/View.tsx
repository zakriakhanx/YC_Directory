import { STARTUP_VIEWS_QUERY } from "@/lib/queries";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { after } from "next/server";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  const viewString = () => {
    if (totalViews <= 1) {
      return "View";
    } else {
      return "Views";
    }
  };
  const v = viewString();

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">
          {totalViews} {v}
        </span>
      </p>
    </div>
  );
};

export default View;
