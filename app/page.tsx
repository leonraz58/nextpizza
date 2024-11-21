import {Container, Filters} from "@/components/shared";
import {Title} from "@/components/shared/title";
import {TopBar} from "@/components/shared/top-bar";
import {ProductsGroupList} from "@/components/shared/products-group-list";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar/>
            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList title={"Пиццы"} categoryId={1} items={[
                                {
                                    id: 1,
                                    name: "Говядина с песто",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: "Говядина с песто",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: "Говядина с песто",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: "Говядина с песто",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                                {
                                    id: 1,
                                    name: "Говядина с песто",
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF12B2F6AFD043932EFBBAF24F90DF.avif',
                                    price: 550,
                                    items: [{price: 550}]
                                },
                            ]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
