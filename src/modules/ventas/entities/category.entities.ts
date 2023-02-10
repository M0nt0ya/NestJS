import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductEntity } from './product.entity';

@Entity('products', { schema: 'ventas' })

export class CategoryEntity {
    [x: string]: any;
    @PrimaryGeneratedColumn('uuid')
    id: number
    @CreateDateColumn({
        name: 'create_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createAt: Date;
    @UpdateDateColumn({
        name: 'update_date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    updateAp: Date;
    @DeleteDateColumn({
        name: 'delete_date',
        type: 'timestamp',
        nullable: true,
    })
    deleteAp: Date;

    //Relaciones
    @ManyToOne(() => ProductEntity, (product) => product.category)
    product: ProductEntity;

    //Columnas
    @Column('varchar', {
        name: 'title',
        comment: 'Nombre categoria',
    })
    title: string;
    @Column('number', {
        name: 'price',
        comment: 'Precio categoria'
    })
    price: number;
    @Column('text', {
        name: 'Description',
        comment: 'Descripcion categoria'
    })
    description: string;

}

