Highcharts.chart("container", {
  title: {
    text: "LG CNS HomePage Customer journey analysis",
  },
  accessibility: {
    point: {
      valueDescriptionFormat:
        "{index}. {point.from} to {point.to}, {point.weight}.",
    },
  },
  series: [
    {
      keys: ["from", "to", "weight"],
      data: [
        ["Home", "Blog", 4800],
        ["/pr/video/30924", "Blog", 839],
        ["/careers/", "Blog", 829],
        ["/pr/video/30833", "Blog", 549],
        ["/company/about/lgcns", "Blog", 341],
        ["etc inflow", "Blog", 3100],
        ["etc inflow", "CNS_Tech", 3800],
        ["etc inflow", "Event", 492],
        ["etc inflow", "IT_Trend", 275],
        ["etc inflow", "Home_", 17],
        ["Blog", "CNS_Tech_", 1221],
        ["Blog", "Home__", 1195],
        ["Blog", "Event_", 173],
        ["Blog", "IT_Trend_", 346],
        ["CNS_Tech", "Blog_", 400],
        ["CNS_Tech", "Home__", 395],
        ["CNS_Tech", "Event_", 173],
        ["CNS_Tech", "IT_Trend_", 146],
        ["CNS_Tech_", "Blog__", 311],
        ["CNS_Tech_", "IT_Trend__", 213],
        ["CNS_Tech_", "Event__", 113],
        ["Home__", "Blog__", 211],
        ["Home__", "IT_Trend__", 311],
        ["Home__", "/careers/_", 91],
      ],
      events: {
        click: function (event) {
          if (event.point.name === "Home") {
            document.getElementById(
              "webvitals"
            ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
          } else if (event.point.name === "/pr/video/30924") {
            document.getElementById(
              "webvitals"
            ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
          } else if (event.point.name === "/careers/") {
            document.getElementById(
              "webvitals"
            ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
          } else if (event.point.name === "/pr/video/30833") {
            document.getElementById(
              "webvitals"
            ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
          } else if (event.point.name === "/company/about/lgcns") {
            document.getElementById(
              "webvitals"
            ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
          } else if (event.point.name === "Blog") {
            document.getElementById(
              "webvitals"
            ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
          } else if (event.point.name === "CNS_Tech") {
            document.getElementById(
              "webvitals"
            ).innerHTML = `<div>LCP:${Math.random()}</div><div>CLS:${Math.random()}</div><div>LCP:${Math.random()}</div>`;
          }
        },
      },
      type: "sankey",
      name: "pageflow",
    },
  ],
});
