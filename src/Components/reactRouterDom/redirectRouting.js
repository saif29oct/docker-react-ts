/**
 * {useParams} from react-router is not changed.
 * But "Redirect" Component doesn't exist in react-router v6.
 * In v6 "Redirect" becomes "Navigate"
 *      Exam:
 *          Previously: <Route path="/" exact>
 *                          <Redicrect to="/welcome" />
 *                      </Route>
 *          v6: <Route path="/" element={ <Navigate replace to="/welcome" /> }> </Route>
 *          Note: "replace" keyword optional and used to redirect the current page.
 *                Without "replace" keyword the element push the web page instead of replacing.
 */