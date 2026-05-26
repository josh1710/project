import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Formation() {
  return (
    <div className="container mx-auto px-4 py-16 text-[#1E40AF]">
      <SectionHeader
        title="Formation"
        description="Mon parcours académique et ma formation en BTS SIO"
      />

      <Tabs defaultValue="bts" className="mt-16">
        <TabsList className="grid w-full grid-cols-3 text-[#1E40AF]">
          <TabsTrigger value="bts">BTS SIO</TabsTrigger>
          <TabsTrigger value="e5">Épreuve E5</TabsTrigger>
          <TabsTrigger value="veille">Veille technologique</TabsTrigger>
        </TabsList>

        <TabsContent value="bts" className="mt-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#1E40AF]">
              BTS Services Informatiques aux Organisations
            </h3>
            <p className="mt-2 text-muted-foreground">
              Option SLAM - Solutions Logicielles et Applications Métiers
            </p>
            <div className="mt-4 space-y-4 text-[#1E40AF]">
              <p>
                Le BTS SIO est une formation de deux ans qui prépare aux métiers de
                l'informatique. L'option SLAM forme des spécialistes du développement
                d'applications.
              </p>
              <h4 className="font-bold">Compétences acquises :</h4>
              <ul className="list-inside list-disc space-y-2">
                <li>Développement d'applications web et mobiles</li>
                <li>Conception et gestion de bases de données</li>
                <li>Analyse et conception de solutions applicatives</li>
                <li>Cybersécurité et protection des données</li>
                <li>Gestion de projet informatique</li>
              </ul>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="e5" className="mt-6">
          <Card className="p-6 text-[#1E40AF]">
            <h3 className="text-xl font-bold">
              Épreuve E5 - Production et fourniture de services
            </h3>
            <div className="mt-4 space-y-4">
              <p>
                L'épreuve E5 évalue la capacité à gérer le patrimoine informatique
                et à répondre aux incidents. Elle met en avant les compétences
                suivantes :
              </p>
              <ul className="list-inside list-disc space-y-2">
                <li>Gestion du patrimoine informatique</li>
                <li>Réponse aux incidents</li>
                <li>Développement de la présence en ligne de l'organisation</li>
                <li>Travail en mode projet</li>
                <li>Organisation de son développement professionnel</li>
              </ul>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="veille" className="mt-6">
          <Card className="p-6 text-[#1E40AF]">
            <h3 className="text-xl font-bold">Veille technologique</h3>
            <div className="mt-4 space-y-4">
              <p>
                Ma veille technologique porte sur l'évolution des cryptomonnaies et
                de la blockchain dans le monde de l'informatique. Ce sujet m'intéresse
                particulièrement, car il touche à la fois au développement, à la
                cybersécurité, à la gestion des données et aux nouveaux usages du web.
              </p>

              <h3 className="text-lg font-semibold">Outils de veille</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Google Alerts pour recevoir des alertes sur les sujets liés à la blockchain et aux cryptomonnaies</li>
                <li>Feedly pour regrouper les flux RSS de sites spécialisés</li>
                <li>Cryptoast pour suivre l'actualité du secteur crypto en français</li>
                <li>Le Monde Informatique pour relier le sujet aux enjeux informatiques professionnels</li>
                <li>Journal du Net pour suivre les tendances numériques et économiques</li>
                <li>YouTube et podcasts spécialisés</li>
              </ul>

              <h3 className="text-lg font-semibold">Définition</h3>
              <p>
                Les cryptomonnaies sont des monnaies numériques décentralisées basées
                sur la technologie blockchain. Elles ne dépendent d'aucune autorité
                centrale et utilisent un réseau distribué pour sécuriser et valider les
                transactions.
              </p>

              <h3 className="text-lg font-semibold">Technologies clés</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Blockchain : base de données décentralisée et difficilement modifiable</li>
                <li>Preuve de travail (Proof of Work) et preuve d'enjeu (Proof of Stake)</li>
                <li>Portefeuilles numériques pour stocker et sécuriser les crypto-actifs</li>
                <li>Applications décentralisées, aussi appelées dApps</li>
              </ul>

              <h3 className="text-lg font-semibold">Actualités récentes</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Mise en place du règlement européen MiCA pour encadrer les crypto-actifs</li>
                <li>Développement de projets combinant intelligence artificielle et blockchain</li>
                <li>Évolution des enjeux de cybersécurité autour des portefeuilles numériques et des plateformes d'échange</li>
                <li>Recherche de solutions moins énergivores, notamment grâce à la preuve d'enjeu</li>
              </ul>

              <h3 className="text-lg font-semibold">Sources utilisées</h3>
              <ul className="list-inside list-disc space-y-2">
                <li><a href="https://cryptoast.fr" className="text-blue-600 underline">Cryptoast</a></li>
                <li><a href="https://www.lemondeinformatique.fr" className="text-blue-600 underline">Le Monde Informatique</a></li>
                <li><a href="https://www.journaldunet.com" className="text-blue-600 underline">Journal du Net</a></li>
              </ul>

              <h3 className="text-lg font-semibold">Conclusion</h3>
              <p>
                Les cryptomonnaies représentent un sujet important dans le secteur
                informatique. Elles font évoluer les pratiques liées à la sécurité, à
                la gestion des données, aux transactions numériques et au développement
                d'applications. Cette veille me permet de mieux comprendre les
                innovations du secteur et leurs impacts sur les métiers de l'informatique.
              </p>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
