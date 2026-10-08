DROP POLICY "Anyone can view published cases" ON public.case_studies;
CREATE POLICY "Anyone can view published cases" ON public.case_studies FOR SELECT TO anon, authenticated USING (published = true);
CREATE POLICY "Admins can view all cases" ON public.case_studies FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));