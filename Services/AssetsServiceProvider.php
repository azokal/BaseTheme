<?php
/**
 * Copyright REZO ZERO 2014
 *
 *
 *
 * @file SLIRServiceProvider.php
 * @copyright REZO ZERO 2014
 * @author Ambroise Maupate
 */
namespace Themes\BaseTheme\Services;

use Pimple\Container;
use Pimple\ServiceProviderInterface;

/**
 * Image formats.
 */
class AssetsServiceProvider implements ServiceProviderInterface
{

    /**
     * @param Pimple\Container $container
     */
    public function register(Container $container)
    {
        $container['imageFormats'] = function ($c) {

            $array = [];

            $array['headerImage'] = [
                'fit' => '1024x200',
            ];

            $array['thumbnail'] = [
                "fit" => "600x338",
                "controls" => true,
                "embed" => true,
            ];

            $array['shareImage'] = [
                'fit' => '200x200',
                'quality' => 90,
            ];
            return $array;
        };

        return $container;
    }
}