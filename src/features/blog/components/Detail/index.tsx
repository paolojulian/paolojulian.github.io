import classNames from 'classnames';
import BlogLayout from 'features/blog/layouts';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent, useState } from 'react';

export type BlogDetailsProps = {
  // No Props
};

const BlogDetails: FunctionComponent<BlogDetailsProps> = (props) => {
  const [testThis, setTestThis] = useState(true);
  return (
    <BlogLayout>
      <div className='max-w-screen-xl mx-auto'>
        <Row>
          <nav className='sticky top-0 h-screen border-r border-gray-200 p-2 hidden md:block'>
            <Stack className='justify-center space-y-2 h-full'>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
            </Stack>
          </nav>
          <div className='flex-1'>
            <Stack>
              {/* Header */}
              <Stack className='h-[300px] bg-gray-100 p-8 justify-center space-y-4'>
                <h1 className='font-bold text-6xl'>
                  Lorem Ipsum - The King of all Kings
                </h1>
                <h3 className='italic font-semibold text-slate-500'>
                  Published on March 2020
                </h3>
              </Stack>
              <div className='p-4 md:p-8'>
                <h2 className='font-semibold text-2xl mb-4'>
                  What is Lorem Ipsum?
                </h2>
                <p>
                  Veniam aliqua Lorem cupidatat consequat voluptate nulla aliqua
                  incididunt laboris sunt eu esse. Qui eu mollit sit cillum
                  fugiat deserunt eu cupidatat reprehenderit ullamco et
                  exercitation. Labore proident do incididunt exercitation
                  dolore in. Anim magna quis consequat ex consectetur. Ullamco
                  consequat eiusmod nulla reprehenderit eiusmod adipisicing
                  Lorem. Dolor ex et nostrud sit ex amet consectetur ullamco
                  sunt consequat anim in. Ex elit esse veniam ex enim ut qui
                  mollit commodo ipsum proident labore officia. Non dolore
                  deserunt qui eiusmod aute nostrud anim ipsum magna consectetur
                  velit ut. Magna labore officia nisi deserunt non nostrud
                  cupidatat anim quis anim do. Nulla labore est ipsum qui
                  aliquip sint id esse aliquip occaecat. Dolore Lorem pariatur
                  dolore eu id nisi ipsum tempor ex laborum ipsum cupidatat
                  sint. Anim tempor ullamco consequat aliqua labore nulla
                  consequat Lorem esse elit aliqua. Ipsum labore esse consequat
                  laboris est do aute est laboris cupidatat incididunt id et
                  labore. Dolore cupidatat fugiat ea nisi adipisicing non
                  ullamco id reprehenderit commodo. Do consectetur proident
                  aliquip qui ullamco magna ullamco sint incididunt officia
                  dolore amet in ullamco. Do aliquip elit fugiat tempor culpa
                  esse pariatur nulla qui incididunt elit cillum incididunt.
                  Laboris ea dolore elit sint. Sint veniam mollit sit dolore
                  cillum labore velit. In ipsum dolor Lorem aute. Mollit
                  voluptate irure ipsum nulla nulla reprehenderit anim quis
                  adipisicing aliqua dolor consectetur labore. Mollit veniam
                  fugiat reprehenderit occaecat irure laboris veniam ullamco
                  anim sint aliqua fugiat. Laborum aliquip ex in veniam
                  exercitation ea. Cillum deserunt eiusmod et cupidatat
                  cupidatat. Ad nisi mollit magna cillum enim in duis ullamco.
                  Consectetur velit dolor mollit dolore consectetur culpa veniam
                  aute ea. Id deserunt aliqua nulla voluptate. Do laboris dolore
                  deserunt aliqua occaecat. Labore commodo sint officia sunt
                  consectetur ullamco cupidatat officia aliqua. Laboris magna
                  pariatur occaecat dolore nisi nisi reprehenderit irure fugiat.
                  Dolore adipisicing incididunt quis enim ea cillum consectetur
                  occaecat id. Laborum commodo incididunt sint duis aliqua aute
                  est et laboris elit adipisicing. Dolor quis cillum nisi
                  nostrud quis non excepteur proident irure est excepteur
                  proident commodo. Velit fugiat elit culpa irure ipsum tempor
                  minim ullamco cupidatat adipisicing. Minim est magna eiusmod
                  incididunt velit sint aliqua minim mollit cupidatat Lorem. Id
                  adipisicing occaecat consequat nisi labore est aliqua
                  exercitation. In consequat ullamco consectetur ea enim est
                  voluptate tempor aliquip elit. Ullamco mollit est proident
                  ipsum aliqua sit non cupidatat dolor mollit officia. Sit quis
                  ex mollit esse anim. Et pariatur aliquip anim veniam labore
                  cupidatat nulla. Id in in eiusmod tempor reprehenderit in
                  magna voluptate cillum minim. Proident excepteur mollit esse
                  qui irure laborum do laboris anim ipsum. Magna exercitation
                  aliqua esse quis elit cillum aliquip commodo qui eu quis ex.
                  Fugiat qui dolore adipisicing pariatur. Laboris proident
                  cillum commodo dolore fugiat do id consectetur aliquip tempor
                  est. Reprehenderit et aliqua ipsum Lorem consectetur aute
                  labore et duis irure pariatur voluptate laborum. Veniam aliqua
                  Lorem cupidatat consequat voluptate nulla aliqua incididunt
                  laboris sunt eu esse. Qui eu mollit sit cillum fugiat deserunt
                  eu cupidatat reprehenderit ullamco et exercitation. Labore
                  proident do incididunt exercitation dolore in. Anim magna quis
                  consequat ex consectetur. Ullamco consequat eiusmod nulla
                  reprehenderit eiusmod adipisicing Lorem. Dolor ex et nostrud
                  sit ex amet consectetur ullamco sunt consequat anim in. Ex
                  elit esse veniam ex enim ut qui mollit commodo ipsum proident
                  labore officia. Non dolore deserunt qui eiusmod aute nostrud
                  anim ipsum magna consectetur velit ut. Magna labore officia
                  nisi deserunt non nostrud cupidatat anim quis anim do. Nulla
                  labore est ipsum qui aliquip sint id esse aliquip occaecat.
                  Dolore Lorem pariatur dolore eu id nisi ipsum tempor ex
                  laborum ipsum cupidatat sint. Anim tempor ullamco consequat
                  aliqua labore nulla consequat Lorem esse elit aliqua. Ipsum
                  labore esse consequat laboris est do aute est laboris
                  cupidatat incididunt id et labore. Dolore cupidatat fugiat ea
                  nisi adipisicing non ullamco id reprehenderit commodo. Do
                  consectetur proident aliquip qui ullamco magna ullamco sint
                  incididunt officia dolore amet in ullamco. Do aliquip elit
                  fugiat tempor culpa esse pariatur nulla qui incididunt elit
                  cillum incididunt. Laboris ea dolore elit sint. Sint veniam
                  mollit sit dolore cillum labore velit. In ipsum dolor Lorem
                  aute. Mollit voluptate irure ipsum nulla nulla reprehenderit
                  anim quis adipisicing aliqua dolor consectetur labore. Mollit
                  veniam fugiat reprehenderit occaecat irure laboris veniam
                  ullamco anim sint aliqua fugiat. Laborum aliquip ex in veniam
                  exercitation ea. Cillum deserunt eiusmod et cupidatat
                  cupidatat. Ad nisi mollit magna cillum enim in duis ullamco.
                  Consectetur velit dolor mollit dolore consectetur culpa veniam
                  aute ea. Id deserunt aliqua nulla voluptate. Do laboris dolore
                  deserunt aliqua occaecat. Labore commodo sint officia sunt
                  consectetur ullamco cupidatat officia aliqua. Laboris magna
                  pariatur occaecat dolore nisi nisi reprehenderit irure fugiat.
                  Dolore adipisicing incididunt quis enim ea cillum consectetur
                  occaecat id. Laborum commodo incididunt sint duis aliqua aute
                  est et laboris elit adipisicing. Dolor quis cillum nisi
                  nostrud quis non excepteur proident irure est excepteur
                  proident commodo. Velit fugiat elit culpa irure ipsum tempor
                  minim ullamco cupidatat adipisicing. Minim est magna eiusmod
                  incididunt velit sint aliqua minim mollit cupidatat Lorem. Id
                  adipisicing occaecat consequat nisi labore est aliqua
                  exercitation. In consequat ullamco consectetur ea enim est
                  voluptate tempor aliquip elit. Ullamco mollit est proident
                  ipsum aliqua sit non cupidatat dolor mollit officia. Sit quis
                  ex mollit esse anim. Et pariatur aliquip anim veniam labore
                  cupidatat nulla. Id in in eiusmod tempor reprehenderit in
                  magna voluptate cillum minim. Proident excepteur mollit esse
                  qui irure laborum do laboris anim ipsum. Magna exercitation
                  aliqua esse quis elit cillum aliquip commodo qui eu quis ex.
                  Fugiat qui dolore adipisicing pariatur. Laboris proident
                  cillum commodo dolore fugiat do id consectetur aliquip tempor
                  est. Reprehenderit et aliqua ipsum Lorem consectetur aute
                  labore et duis irure pariatur voluptate laborum. Veniam aliqua
                  Lorem cupidatat consequat voluptate nulla aliqua incididunt
                  laboris sunt eu esse. Qui eu mollit sit cillum fugiat deserunt
                  eu cupidatat reprehenderit ullamco et exercitation. Labore
                  proident do incididunt exercitation dolore in. Anim magna quis
                  consequat ex consectetur. Ullamco consequat eiusmod nulla
                  reprehenderit eiusmod adipisicing Lorem. Dolor ex et nostrud
                  sit ex amet consectetur ullamco sunt consequat anim in. Ex
                  elit esse veniam ex enim ut qui mollit commodo ipsum proident
                  labore officia. Non dolore deserunt qui eiusmod aute nostrud
                  anim ipsum magna consectetur velit ut. Magna labore officia
                  nisi deserunt non nostrud cupidatat anim quis anim do. Nulla
                  labore est ipsum qui aliquip sint id esse aliquip occaecat.
                  Dolore Lorem pariatur dolore eu id nisi ipsum tempor ex
                  laborum ipsum cupidatat sint. Anim tempor ullamco consequat
                  aliqua labore nulla consequat Lorem esse elit aliqua. Ipsum
                  labore esse consequat laboris est do aute est laboris
                  cupidatat incididunt id et labore. Dolore cupidatat fugiat ea
                  nisi adipisicing non ullamco id reprehenderit commodo. Do
                  consectetur proident aliquip qui ullamco magna ullamco sint
                  incididunt officia dolore amet in ullamco. Do aliquip elit
                  fugiat tempor culpa esse pariatur nulla qui incididunt elit
                  cillum incididunt. Laboris ea dolore elit sint. Sint veniam
                  mollit sit dolore cillum labore velit. In ipsum dolor Lorem
                  aute. Mollit voluptate irure ipsum nulla nulla reprehenderit
                  anim quis adipisicing aliqua dolor consectetur labore. Mollit
                  veniam fugiat reprehenderit occaecat irure laboris veniam
                  ullamco anim sint aliqua fugiat. Laborum aliquip ex in veniam
                  exercitation ea. Cillum deserunt eiusmod et cupidatat
                  cupidatat. Ad nisi mollit magna cillum enim in duis ullamco.
                  Consectetur velit dolor mollit dolore consectetur culpa veniam
                  aute ea. Id deserunt aliqua nulla voluptate. Do laboris dolore
                  deserunt aliqua occaecat. Labore commodo sint officia sunt
                  consectetur ullamco cupidatat officia aliqua. Laboris magna
                  pariatur occaecat dolore nisi nisi reprehenderit irure fugiat.
                  Dolore adipisicing incididunt quis enim ea cillum consectetur
                  occaecat id. Laborum commodo incididunt sint duis aliqua aute
                  est et laboris elit adipisicing. Dolor quis cillum nisi
                  nostrud quis non excepteur proident irure est excepteur
                  proident commodo. Velit fugiat elit culpa irure ipsum tempor
                  minim ullamco cupidatat adipisicing. Minim est magna eiusmod
                  incididunt velit sint aliqua minim mollit cupidatat Lorem. Id
                  adipisicing occaecat consequat nisi labore est aliqua
                  exercitation. In consequat ullamco consectetur ea enim est
                  voluptate tempor aliquip elit. Ullamco mollit est proident
                  ipsum aliqua sit non cupidatat dolor mollit officia. Sit quis
                  ex mollit esse anim. Et pariatur aliquip anim veniam labore
                  cupidatat nulla. Id in in eiusmod tempor reprehenderit in
                  magna voluptate cillum minim. Proident excepteur mollit esse
                  qui irure laborum do laboris anim ipsum. Magna exercitation
                  aliqua esse quis elit cillum aliquip commodo qui eu quis ex.
                  Fugiat qui dolore adipisicing pariatur. Laboris proident
                  cillum commodo dolore fugiat do id consectetur aliquip tempor
                  est. Reprehenderit et aliqua ipsum Lorem consectetur aute
                  labore et duis irure pariatur voluptate laborum. Veniam aliqua
                  Lorem cupidatat consequat voluptate nulla aliqua incididunt
                  laboris sunt eu esse. Qui eu mollit sit cillum fugiat deserunt
                  eu cupidatat reprehenderit ullamco et exercitation. Labore
                  proident do incididunt exercitation dolore in. Anim magna quis
                  consequat ex consectetur. Ullamco consequat eiusmod nulla
                  reprehenderit eiusmod adipisicing Lorem. Dolor ex et nostrud
                  sit ex amet consectetur ullamco sunt consequat anim in. Ex
                  elit esse veniam ex enim ut qui mollit commodo ipsum proident
                  labore officia. Non dolore deserunt qui eiusmod aute nostrud
                  anim ipsum magna consectetur velit ut. Magna labore officia
                  nisi deserunt non nostrud cupidatat anim quis anim do. Nulla
                  labore est ipsum qui aliquip sint id esse aliquip occaecat.
                  Dolore Lorem pariatur dolore eu id nisi ipsum tempor ex
                  laborum ipsum cupidatat sint. Anim tempor ullamco consequat
                  aliqua labore nulla consequat Lorem esse elit aliqua. Ipsum
                  labore esse consequat laboris est do aute est laboris
                  cupidatat incididunt id et labore. Dolore cupidatat fugiat ea
                  nisi adipisicing non ullamco id reprehenderit commodo. Do
                  consectetur proident aliquip qui ullamco magna ullamco sint
                  incididunt officia dolore amet in ullamco. Do aliquip elit
                  fugiat tempor culpa esse pariatur nulla qui incididunt elit
                  cillum incididunt. Laboris ea dolore elit sint. Sint veniam
                  mollit sit dolore cillum labore velit. In ipsum dolor Lorem
                  aute. Mollit voluptate irure ipsum nulla nulla reprehenderit
                  anim quis adipisicing aliqua dolor consectetur labore. Mollit
                  veniam fugiat reprehenderit occaecat irure laboris veniam
                  ullamco anim sint aliqua fugiat. Laborum aliquip ex in veniam
                  exercitation ea. Cillum deserunt eiusmod et cupidatat
                  cupidatat. Ad nisi mollit magna cillum enim in duis ullamco.
                  Consectetur velit dolor mollit dolore consectetur culpa veniam
                  aute ea. Id deserunt aliqua nulla voluptate. Do laboris dolore
                  deserunt aliqua occaecat. Labore commodo sint officia sunt
                  consectetur ullamco cupidatat officia aliqua. Laboris magna
                  pariatur occaecat dolore nisi nisi reprehenderit irure fugiat.
                  Dolore adipisicing incididunt quis enim ea cillum consectetur
                  occaecat id. Laborum commodo incididunt sint duis aliqua aute
                  est et laboris elit adipisicing. Dolor quis cillum nisi
                  nostrud quis non excepteur proident irure est excepteur
                  proident commodo. Velit fugiat elit culpa irure ipsum tempor
                  minim ullamco cupidatat adipisicing. Minim est magna eiusmod
                  incididunt velit sint aliqua minim mollit cupidatat Lorem. Id
                  adipisicing occaecat consequat nisi labore est aliqua
                  exercitation. In consequat ullamco consectetur ea enim est
                  voluptate tempor aliquip elit. Ullamco mollit est proident
                  ipsum aliqua sit non cupidatat dolor mollit officia. Sit quis
                  ex mollit esse anim. Et pariatur aliquip anim veniam labore
                  cupidatat nulla. Id in in eiusmod tempor reprehenderit in
                  magna voluptate cillum minim. Proident excepteur mollit esse
                  qui irure laborum do laboris anim ipsum. Magna exercitation
                  aliqua esse quis elit cillum aliquip commodo qui eu quis ex.
                  Fugiat qui dolore adipisicing pariatur. Laboris proident
                  cillum commodo dolore fugiat do id consectetur aliquip tempor
                  est. Reprehenderit et aliqua ipsum Lorem consectetur aute
                  labore et duis irure pariatur voluptate laborum. Veniam aliqua
                  Lorem cupidatat consequat voluptate nulla aliqua incididunt
                  laboris sunt eu esse. Qui eu mollit sit cillum fugiat deserunt
                  eu cupidatat reprehenderit ullamco et exercitation. Labore
                  proident do incididunt exercitation dolore in. Anim magna quis
                  consequat ex consectetur. Ullamco consequat eiusmod nulla
                  reprehenderit eiusmod adipisicing Lorem. Dolor ex et nostrud
                  sit ex amet consectetur ullamco sunt consequat anim in. Ex
                  elit esse veniam ex enim ut qui mollit commodo ipsum proident
                  labore officia. Non dolore deserunt qui eiusmod aute nostrud
                  anim ipsum magna consectetur velit ut. Magna labore officia
                  nisi deserunt non nostrud cupidatat anim quis anim do. Nulla
                  labore est ipsum qui aliquip sint id esse aliquip occaecat.
                  Dolore Lorem pariatur dolore eu id nisi ipsum tempor ex
                  laborum ipsum cupidatat sint. Anim tempor ullamco consequat
                  aliqua labore nulla consequat Lorem esse elit aliqua. Ipsum
                  labore esse consequat laboris est do aute est laboris
                  cupidatat incididunt id et labore. Dolore cupidatat fugiat ea
                  nisi adipisicing non ullamco id reprehenderit commodo. Do
                  consectetur proident aliquip qui ullamco magna ullamco sint
                  incididunt officia dolore amet in ullamco. Do aliquip elit
                  fugiat tempor culpa esse pariatur nulla qui incididunt elit
                  cillum incididunt. Laboris ea dolore elit sint. Sint veniam
                  mollit sit dolore cillum labore velit. In ipsum dolor Lorem
                  aute. Mollit voluptate irure ipsum nulla nulla reprehenderit
                  anim quis adipisicing aliqua dolor consectetur labore. Mollit
                  veniam fugiat reprehenderit occaecat irure laboris veniam
                  ullamco anim sint aliqua fugiat. Laborum aliquip ex in veniam
                  exercitation ea. Cillum deserunt eiusmod et cupidatat
                  cupidatat. Ad nisi mollit magna cillum enim in duis ullamco.
                  Consectetur velit dolor mollit dolore consectetur culpa veniam
                  aute ea. Id deserunt aliqua nulla voluptate. Do laboris dolore
                  deserunt aliqua occaecat. Labore commodo sint officia sunt
                  consectetur ullamco cupidatat officia aliqua. Laboris magna
                  pariatur occaecat dolore nisi nisi reprehenderit irure fugiat.
                  Dolore adipisicing incididunt quis enim ea cillum consectetur
                  occaecat id. Laborum commodo incididunt sint duis aliqua aute
                  est et laboris elit adipisicing. Dolor quis cillum nisi
                  nostrud quis non excepteur proident irure est excepteur
                  proident commodo. Velit fugiat elit culpa irure ipsum tempor
                  minim ullamco cupidatat adipisicing. Minim est magna eiusmod
                  incididunt velit sint aliqua minim mollit cupidatat Lorem. Id
                  adipisicing occaecat consequat nisi labore est aliqua
                  exercitation. In consequat ullamco consectetur ea enim est
                  voluptate tempor aliquip elit. Ullamco mollit est proident
                  ipsum aliqua sit non cupidatat dolor mollit officia. Sit quis
                  ex mollit esse anim. Et pariatur aliquip anim veniam labore
                  cupidatat nulla. Id in in eiusmod tempor reprehenderit in
                  magna voluptate cillum minim. Proident excepteur mollit esse
                  qui irure laborum do laboris anim ipsum. Magna exercitation
                  aliqua esse quis elit cillum aliquip commodo qui eu quis ex.
                  Fugiat qui dolore adipisicing pariatur. Laboris proident
                  cillum commodo dolore fugiat do id consectetur aliquip tempor
                  est. Reprehenderit et aliqua ipsum Lorem consectetur aute
                  labore et duis irure pariatur voluptate laborum.
                </p>
              </div>
            </Stack>
          </div>
          <div className='w-[300px] h-screen sticky top-0 hidden xl:block'>
            <Stack>
              <div className='py-8'>
                <Row className='justify-end items-center space-x-4'>
                  <Stack className='items-end'>
                    <h3>Paolo Vincent Julian</h3>
                    <h4>Software Engineer</h4>
                  </Stack>
                  <div className='w-12 h-12 rounded-xl bg-gray-200'></div>
                </Row>
              </div>

              <Stack className='px-8 space-y-4'>
                <Row className='justify-between'>
                  <h3>Blogs</h3>
                  <button>Newest</button>
                </Row>

                <Stack className='space-y-8'>
                  <Row className='items-center'>
                    <div>
                      <h3 className='line-clamp-1 text-slate-800 font-bold'>
                        Black Twitter is Irreplaceable
                      </h3>
                      <p className='line-clamp-2 text-sm text-slate-600'>
                        Occaecat ipsum ipsum voluptate consequat minim Lorem do.
                        Tempor nulla officia ipsum labore irure qui dolor ad et
                        quis in. Voluptate consequat cupidatat labore non mollit
                        voluptate consequat officia nulla amet ipsum incididunt
                        consectetur esse. Dolore irure pariatur magna esse dolor
                        et sit commodo excepteur ad incididunt nulla dolore.
                        Laborum magna id voluptate amet.
                      </p>
                      <span className='text-xs text-slate-500'>
                        11-22-2022 08:00 AM 5 mins read
                      </span>
                    </div>
                  </Row>
                  <Row className='items-center'>
                    <div>
                      <h3 className='line-clamp-1 text-slate-800 font-bold'>
                        Black Twitter is Irreplaceable
                      </h3>
                      <p className='line-clamp-2 text-sm text-slate-600'>
                        Occaecat ipsum ipsum voluptate consequat minim Lorem do.
                        Tempor nulla officia ipsum labore irure qui dolor ad et
                        quis in. Voluptate consequat cupidatat labore non mollit
                        voluptate consequat officia nulla amet ipsum incididunt
                        consectetur esse. Dolore irure pariatur magna esse dolor
                        et sit commodo excepteur ad incididunt nulla dolore.
                        Laborum magna id voluptate amet.
                      </p>
                      <span className='text-xs text-slate-500'>
                        11-22-2022 08:00 AM 5 mins read
                      </span>
                    </div>
                  </Row>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Row>
      </div>
    </BlogLayout>
  );
};

export default BlogDetails;
