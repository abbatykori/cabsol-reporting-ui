<template src='./home.html'></template>

<script>
import Vue from "vue";
import Buefy from "buefy";
import "buefy/lib/buefy.css";
import VueCharts from "vue-chartjs";
import BarCharts from "./BarCharts.vue";
import LineCharts from "./LineCharts.vue";
import HorizontalBarCharts from "./HorizontalBarCharts.vue";

Vue.use(Buefy);

export default {
  name: "Home",
  components: { BarCharts, LineCharts, HorizontalBarCharts },
  data() {
    const financialOverview = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Revenue",
          backgroundColor: "#9ac563",
          data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        },
        {
          label: "Total Expenses",
          backgroundColor: "#de594f",
          data: [120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120]
        },
        {
          label: "Gross Profit",
          backgroundColor: "#4b4b4d",
          data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
        }
      ]
    };
    const cashOnHand = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Cash on Hand",
          backgroundColor: "#9ac562",
          data: [.80,.75,.70,.67,.60,.55,.53,.45,.40,.32,.30,.27,.20]
        }
      ]
    };
    const monthsOfRunway = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Months of Runway",
          backgroundColor: "#06aad2",
          data: [.80,.75,.70,.67,.60,.55,.53,.45,.40,.32,.30,.27,.20]
        }
      ]
    };
    return {
      financialOverview,
      cashOnHand,
      monthsOfRunway,
      defaultOpenedDetails: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
:root {
  --primary-color: #0a6937;
}

/* @import "~bulma";
@import "~buefy/src/scss/buefy"; */
@import url("https://fonts.googleapis.com/css?family=Karla:400,700");
html,
body {
  font-family: "Karla", sans-serif;
}
body {
  padding: 0;
  margin: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: var(--primary-color);
}

#application-wrapper {
  background: #f4f7f9;

  display: grid;
  grid-template-columns: 256px auto;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
#application-wrapper > nav {
  /* grid-row-start: 2;
  grid-row-end: 2; */
  background: #fff;
  background: var(--primary-color);
  padding: 32px;
}

.logo {
  max-width: 100%;
  padding: 10px 0 50px;
}
.menu a:not(.dropdown-item),
.menu p {
  color: #fff;
}
.menu li {
  display: block;
  width: 100%;
}
.menu .card,
.menu .card-header {
  box-shadow: none;
  background: transparent;
}
.menu .collapse {
  margin-bottom: 20px;
}
.menu .card-content {
  padding: 0 1.5rem;
}
#application-wrapper main {
  padding: 10px 25px;
}
.page-header {
  margin-bottom: 20px;
}
.page-title {
  font-size: 24px;
  font-weight: normal;
}
.page-filter-section {
  margin-bottom: 20px;
}
.date-time {
  font-size: 11px;
}
.input,
.taginput .taginput-container.is-focusable,
.textarea,
.dropdown-trigger button {
  font-size: 14px;
}
.field .label {
  font-weight: bold;
  font-size: 14px;
}
.breadcrumb a {
  font-size: 14px;
  padding: 0.5em 0.5em;
  color: #03a9f4;
  line-height: 1;
}

.grid-wrapper {
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(35vw, 1fr));
  color: #444;
  margin-bottom: 20px;
}

.grid-box:first-child {
  grid-column-start: 1;
  grid-column-end: 3;
}
.grid-box {
  padding: 10px;
}

.month-summary__figure{
  font-weight: bold;
  font-size: 38px;
  color: #4a4b4c;
}
.month-summary__title{
  margin-top: 40px;
}
.grid-box__title {
  color: #363636;
  font-weight: bold;
  font-size: 18px;
}
.b-table .table {
  font-size: 14px;
}
</style>
