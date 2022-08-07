type ReturnProps = {
  avg: number;
  mx: number;
}

export const changeOverview = (
  wrapper: Element,
  data: any[],
  activity: string
):ReturnProps => {
  // 平均，最大値の計算
  let total = 0;
  let mx = 0;
  data.forEach((element) => {
    total += element[activity];
    mx = Math.max(mx, element[activity]);
  });
  let avg = total / data.length;

  let imgLink = imgLinks[activity];

  // Replace Overview Area
  let div = document.createElement("div");
  div.setAttribute("id", "custom-activity-overview")


  let contributeArea = wrapper.querySelector(".wb-break-word");
  div.setAttribute("class", "wb-break-word");
  contributeArea?.replaceWith(div);

  // Replace Graph Area
  let img = document.createElement("img");
  img.src = imgLink;
  img.height = 200;

  let graphArea = wrapper.querySelector(
    ".js-activity-overview-graph-container"
  );
  img.setAttribute("class", "js-activity-overview-graph-container");
  graphArea?.replaceWith(img);

  return {
    avg:Math.trunc(avg),
    mx,
  }
};

const imgLinks: { [key: string]: any } = {
  walking:
    "https://1.bp.blogspot.com/-ezz3owdPC4o/V4whVqqnJqI/AAAAAAAA8WQ/ysz39M5fSG8zPGVWhRJTdbMmIZKkVhfLgCLcB/s800/sport_walking_man.png",
  running:
    "https://3.bp.blogspot.com/-Xi0HfO83JFE/WGnPczN4dWI/AAAAAAABA7I/cbfGXUBo4o0SADArnHOU-ZHD74by850ngCLcB/s800/sports_run_syoumen_man_zekken.png",
  cycling:
    "https://2.bp.blogspot.com/-onJgf6gS6uo/V_4cTDkv-0I/AAAAAAAA-y8/y5YsJJg9cxkGFQ4fR4cFlQk0bPm9tNBdACLcB/s800/jitensya_cycling_man.png",
  swimming:
    "https://2.bp.blogspot.com/-zLDZ8NaY1XY/VMIt8ySIynI/AAAAAAAAq0g/-EhfwHaFL68/s800/swimming_butterfly.png",
};
