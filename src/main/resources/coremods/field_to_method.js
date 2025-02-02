var ASMAPI = Java.type('net.minecraftforge.coremod.api.ASMAPI')

function initializeCoreMod() {
    return {
        'potion': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.world.effect.MobEffectInstance'
            },
            'transformer': function(classNode) {
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_19502_'), ASMAPI.mapMethod('m_19544_')) // potion
                return classNode;
            }
        },
        'flowing_fluid_block': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.world.level.block.LiquidBlock'
            },
            'transformer': function(classNode) {
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_54689_'), 'getFluid')
                return classNode;
            }
        },
        'bucketitem': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.world.item.BucketItem'
            },
            'transformer': function(classNode) {
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_40687_'), 'getFluid')
                return classNode;
            }
        },
        'stairsblock': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.world.level.block.StairBlock'
            },
            'transformer': function(classNode) {
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_56858_'), 'getModelBlock')
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_56859_'), 'getModelState')
                return classNode;
            }
        },
        'flowerpotblock': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.world.level.block.FlowerPotBlock'
            },
            'transformer': function(classNode) {
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_53525_'), ASMAPI.mapMethod('m_53560_')) // flower
                return classNode;
            }
        },
        /*
        'mob_bucket_item': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.world.item.MobBucketItem'
            },
            'transformer': function(classNode) {
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_41262_'), ASMAPI.mapMethod('getFishType')) // type - Not implemented
                return classNode;
            }
        },
        */
        'itemstack': {
            'target': {
                'type': 'CLASS',
                'name': 'net.minecraft.world.item.ItemStack'
            },
            'transformer': function(classNode) {
                ASMAPI.redirectFieldToMethod(classNode, ASMAPI.mapField('f_41589_'), ASMAPI.mapMethod('m_41720_')) // item
                return classNode;
            }
        }
    }
}
