import {Container, Filters, ProductCard} from "@/components/shared";
import {Title} from "@/components/shared/title";
import {TopBar} from "@/components/shared/top-bar";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>
            <TopBar/>
            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductCard id={0} name={'Пицца Расрас'} price={100} imageUrl={'https://media.dodostatic.net/image/r:292x292/11EF12B2F6AFD043932EFBBAF24F90DF.avif'}/>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
