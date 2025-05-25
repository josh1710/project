import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Formation() {
  return (
    <div className="text-[#1E40AF] container mx-auto px-4 py-16">
      <SectionHeader
        title="Formation"
        description="Mon parcours académique et ma formation en BTS SIO"
      />

      <Tabs defaultValue="bts" className="mt-16 ">
        <TabsList className="grid w-full grid-cols-3 text-[#1E40AF]">
          <TabsTrigger value="bts">BTS SIO</TabsTrigger>
          <TabsTrigger value="e5">Épreuve E5</TabsTrigger>
          <TabsTrigger value="veille">Veille technologique</TabsTrigger>
        </TabsList>

        <TabsContent value="bts" className="mt-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-[#1E40AF]">BTS Services Informatiques aux Organisations</h3>
            <p className="mt-2 text-muted-foreground">Option SLAM - Solutions Logicielles et Applications Métiers</p>
            <div className="mt-4 space-y-4 text-[#1E40AF]">
              <p>
                Le BTS SIO est une formation de deux ans qui prépare aux métiers de l'informatique.
                L'option SLAM forme des spécialistes du développement d'applications.
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
            <h3 className="text-xl font-bold">Épreuve E5 - Production et fourniture de services</h3>
            <div className="mt-4 space-y-4">
              <p>
                L'épreuve E5 évalue la capacité à gérer le patrimoine informatique et à répondre aux incidents.
                Elle met en avant les compétences suivantes :
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
                La veille technologique est un aspect crucial de mon développement professionnel.
                Le sujet qui me passione le plus est la crypto monnaie nous verrons donc 
                L'évolution et impact des cryptomonnaies dans le monde de l informatique.
              </p>
              <h3 className="text-lg font-semibold">Définition</h3>
  <p>
    Les cryptomonnaies sont des monnaies numériques décentralisées basées sur la technologie blockchain.
    Elles ne dépendent d’aucune autorité centrale mais utilisent un réseau distribué pour sécuriser
    et valider les transactions.
  </p>

  <h3 className="text-lg font-semibold">Technologies clés</h3>
  <ul className="list-inside list-disc space-y-2">
    <li>Blockchain : base de données décentralisée et immuable</li>
    <li>Preuve de travail (Proof of Work) et preuve d’enjeu (Proof of Stake)</li>
    <li>Smart contracts : automatisation des processus via des programmes blockchain</li>
    <li>Portefeuilles numériques pour stocker et sécuriser les crypto-actifs</li>
  </ul>

  <h3 className="text-lg font-semibold">Actualité récentes</h3>
  <ul className="list-inside list-disc space-y-2">
    <li>Hausse du Bitcoin en 2024 après le halving, intérêt renouvelé des investisseurs</li>
    <li>Mise en place du règlement européen MiCA pour encadrer les cryptomonnaies</li>
    <li>Montée des projets combinant IA et blockchain</li>
    <li>Transition écologique : Ethereum passe à la preuve d’enjeu (PoS)</li>
  </ul>

  <h3 className="text-lg font-semibold">Sources utilisées</h3>
  <ul className="list-inside list-disc space-y-2">
    <li><a href="https://cryptoast.fr" className="text-blue-600 underline">Cryptoast.fr</a></li>
    <li><a href="https://www.lemondeinformatique.fr" className="text-blue-600 underline">Le Monde Informatique</a></li>
    <li><a href="https://www.journaldunet.com" className="text-blue-600 underline">Journal du Net</a></li>
    <li><a href="https://europa.eu" className="text-blue-600 underline">Site de l’Union Européenne (MiCA)</a></li>
  </ul>

  <h3 className="text-lg font-semibold">Conclusion</h3>
  <p>
    La cryptomonnaie représente un sujet incontournable dans le secteur informatique.
    Entre innovations technologiques, sécurité des données, et enjeux réglementaires,
    elle transforme les pratiques professionnelles et ouvre de nouvelles perspectives 
    dans le développement, la cybersécurité et l’architecture réseau.
  </p>
</div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}