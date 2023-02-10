import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm"
import { CategoryEntity } from "./category.entities";

@Entity('products', {schema:'ventas'})

export class ProductEntity{
    @PrimaryGeneratedColumn('uuid')
    id:number
    @CreateDateColumn({
        name:'create_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createAt:Date;
    @UpdateDateColumn({
        name:'update_date',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })

    updateAp:Date;
    @DeleteDateColumn({
        name:'delete_date',
        type:'timestamp',
        nullable:true,
    })
    deleteAp:Date;

    //Relaciones 

    @ManyToOne(() => CategoryEntity, (category) => category.products)
    category: CategoryEntity;

    //Columnas
    @Column('varchar', {
        name:'title',
        comment:'Nombre producto',
    })
    title:string;
    @Column('number', {
        name:'price',
        comment:'Precio producto'
    })
    price:number;
    @Column('text', {
        name:'Description',
        comment: 'Descripcion producto'
    })
    description:string;
    @Column('array',{
        name: 'images',
        comment:'Images producto'
    })
    image:string[];

    @Column ('varchar',  {
        name: 'category-id',
        comment: 'idCategoria relacionada',
    })

    categories:number;

     @BeforeInsert()
     @BeforeUpdate()

    async setTitle(){
        if(!this.title){
            return('Sin Producto');
        }
        this.title = this.title.toUpperCase();
    }
}

