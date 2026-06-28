import { Routes, Route } from "react-router";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import ListGame from "@/pages/ListGame";
import DetailPage from "@/pages/DetailPage";
import RatingInformation from "@/pages/RatingInformation";
import FormRequest from "@/pages/FormRequest";
import FormSuggestion from "@/pages/FormSuggestion";
import NotFoundPage from "@/pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<ListGame />} />
        <Route path="/games/:id" element={<DetailPage />} />
        <Route path="/rating-info" element={<RatingInformation />} />
        <Route path="/request-rating" element={<FormRequest />} />
        <Route path="/suggestion" element={<FormSuggestion />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}