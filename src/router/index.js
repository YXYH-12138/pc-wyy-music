import Discover from "@/pages/discover";
import { Redirect } from "react-router-dom";
import Recommend from "@/pages/discover/childPages/recommend";
import RankingList from "@/pages/discover/childPages/rankinglist";
import Mine from "@/pages/mine"
import NotFound from "components/NotFound";

const routers = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />
  },
  // 发现音乐
  {
    path: '/discover',
    component: Discover,
    routers: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/ranking',
        component: RankingList,
      },
      {
        path: '/',
        component: NotFound,
        notFound: true
      }
    ]
  },
  // 我的音乐
  {
    path: '/mine',
    component: Mine
  },
  // 404
  {
    path: '/',
    component: NotFound
  }
]

export default routers;