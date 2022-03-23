function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./javascript-logo.png" width="50px" />
                    <img src="./react-logo.png" width="100px" />
                </nav>
            </header>
            <div className="container">
                <h1>Mes pronostics gratuits du weekend. </h1>
                <p>
                    <strong>Ligue 1</strong>
                </p>
                <ul>
                    <li>
                        <li>
                            <strong>St-Etienne VS Marseille, 2 Avril 2022 20:00</strong>
                        </li>
                        <img src="./images/ste_mar.png" />
                        <p></p>
                        <li>
                            <strong>Paris SG VS Lorient, 3 Avril 2022 19:45</strong>
                        </li>
                        <img src="./images/psg_lor.png" />
                    </li>
                </ul>
                <p>
                    <strong>Liga</strong>
                </p>
                <ul>
                    <li>
                        <li>
                            <strong>FC Barcelone VS FC Séville, 3 Avril 2022 20:00</strong>
                        </li>
                        <img src="./images/bar_sev.png" />
                        <p></p>
                        <li>
                            <strong>Real Sociedad VS Espanyol, 4 Avril 2022 20:00</strong>
                        </li>
                        <img src="./images/soc_esp.png" />
                    </li>
                </ul>
                <p>
                    <strong>Serie A</strong>
                </p>
                <ul>
                    <li>
                        <li>
                            <strong>Salertina Vs Torino, 2 Avril 2022 19:45</strong>
                        </li>
                        <img src="./images/sal_tor.png" />
                        <p></p>
                        <li>
                            <strong>AC Milan VS Bologna, 4 Avril 2022 19:45</strong>
                        </li>
                        <img src="./images/mil_bol.png" />
                    </li>
                </ul>
                <p>
                    <strong>Premier league</strong>
                </p>
                <ul>
                    <li>
                        <li>
                            <strong>Tottenham VS Newcastle, 3 Avril 2022 16:30</strong>
                        </li>
                        <img src="./images/tot_new.png" />
                        <p></p>
                        <li>
                            <strong>Mantchester Utd VS Leicester, 2 Avril 2022 17:30</strong>
                        </li>
                        <img src="./images/man_lei.png" />
                    </li>
                </ul>
                <p>
                    <strong>Bundesliga</strong>
                </p>
                <ul>
                    <li>
                        <li>
                            <strong>Dortmund VS Leipzig, 2 Avril 2022 17:30</strong>
                        </li>
                        <img src="./images/dor_leip.png" />
                        <p></p>
                        <li>
                            <strong>Mgladbach VS Mayance, 3 Avril 2022 16:30</strong>
                        </li>
                        <img src="./images/mgl_may.png" />
                    </li>
                </ul>
                <p>Mes pronostics se basent sur la comparaison des statistiques des matchs à domicile et à l'extérieur des deux équipes d'une rencontre. Sont prises en compte dans mes calculs:</p>
                <ul>
                    <li>Average Goals</li>
                    <li>Scoring rate</li>
                    <li>Clean sheets </li>
                    <li>Team scoring first</li>
                    <li>Leading at half-time</li>
                    <li>Over goals de 1.5 à 5.5 dans les 90 min</li>
                    <li>Over goals de 0.5 à 2.5 dans chaque mi-temps</li>
                    <li>Average corners</li>
                </ul>
            </div>
            <div class="liens">
                <a target="amazon" href="https://www.amazon.fr/b?_encoding=UTF8&tag=mespronosduwe-21&linkCode=ur2&linkId=2ce0e53864dd1d3833af3b45ff238c0f&camp=1642&creative=6746&node=302049">
                    100 livres super
                </a>
                <p><iframe src="https://rcm-eu.amazon-adsystem.com/e/cm?o=8&p=48&l=ur1&category=prime_student&banner=08Y1G45JJB18HNPAKP82&f=ifr&linkID=9f26cf9b56512dea0a05ff736d56d1e3&t=mespronosduwe-21&tracking_id=mespronosduwe-21" width="728" height="90" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe></p>
            </div>
            <ul>
                <footer>
                    <p>
                        <p>
                            <small>
                                <strong>Sachez que jouer aux jeux de hasard comporte des risques</strong>
                            </small>
                        </p>
                        <small>(c) AliF 2022. Tous droits Réservés</small>
                    </p>
                </footer>
            </ul>
        </div>
    );
}
ReactDOM.render(<Page />, document.getElementById("root"));
