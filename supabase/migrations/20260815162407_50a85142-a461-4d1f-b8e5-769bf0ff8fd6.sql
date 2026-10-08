CREATE POLICY "Admins manage case media" ON storage.objects FOR ALL TO authenticated
USING (bucket_id = 'case-media' AND public.has_role(auth.uid(),'admin'))
WITH CHECK (bucket_id = 'case-media' AND public.has_role(auth.uid(),'admin'));
CREATE POLICY "Anyone can read case media" ON storage.objects FOR SELECT TO anon, authenticated
USING (bucket_id = 'case-media');