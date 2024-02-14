<?php
/*
    Plugin Name: elsa0047 Random Cat Fact Widget
    Description: Returns random cat facts
    Author: Elina Samuelsson
*/
add_action('widgets_init', function () {
    register_widget('elsa0047_random_cat_facts_widget');
});
//widget klass
class elsa0047_random_cat_facts_widget extends WP_Widget
{
    //widget konstruktor
    public function __construct()
    {
        parent::WP_Widget(false, 'elsa0047_random_cat_facts_widget', 'Random Cat Fact Widget');
    }

    function widget($args, $instance)
    {
        //importerar variabler
        extract($args);
        //lägger APIns URL i en variabel
        $api_url = "https://meowfacts.herokuapp.com/";
        //lägger JSON-datan från APIn i en varabel efter den gjorts läsbar i PHP
        $contents = json_decode(file_get_contents($api_url), true);
        //berättar att den synliga delen av widgeten börjar här
        echo $before_widget;
        //om hämtning från APIn misslyckas och det inte finns någon data i $contents
        if (!$contents) {
            //berättar att titeln börjar här, och hämtar widgetens namn, samt berättar att titeln avslutas här
            echo $before_title . $instance['title'] . $after_title;
            //skriver ut en paragraf med ett felmeddelande eftersom ingen data hämtats från APIn
            echo '<p>' .
                'No cat facts available right now, check in later.' .
                '</p>';
        //om hämtning från API lyckats och data finns i $contents
        } else {
            //lägger strängen från sektionen data i $contents-variabeln
            $cat_fact = $contents['data'];
            //ser till att $cat_facts-variabeln inte är sparad som en array
            $cat_fact = implode('', $cat_fact);
            //berättar att titeln börjar här, och hämtar widgetens namn, samt berättar att titeln avslutas här
            echo $before_title . $instance['title'] . $after_title; ?>
            <!--skriver ut en paragraf med datan hämtad från APIn--> 
                <p class="cat-fact">
                    <?php echo $cat_fact ?>
                </p>
                
            <?php
        }
        //berättar att synliga delen av widgeten slutar här
        echo $after_widget;
    }
    //lagrar inställningar
    public function update($new_instance, $old_instance)
    {
        //sparar värdena som anges i widgetens inställningar
        $new_instance['title'] = isset($new_instance['title']) ? wp_strip_all_tags($new_instance['title']) : '';
        return $new_instance;
    }
    //inställningar
    public function form($instance)
    {
        //variabel som hämtar tidigare inställningar från "minnet" (i detta fall widgetens titel)
        $title = esc_attr($instance['title']);
        ?>
        <!--skapar fält att fylla i våra inställningar i-->
        <p>
            <label for="<?php echo $this->get_field_id('title') ?>">Title:
                <input class="widefat" id="<?php echo $this->get_field_id('title') ?>"
                    name="<?php echo $this->get_field_name('title') ?>" type="text" value="<?php echo $title; ?>" />
            </label>
        </p>

        <?php
    }
}
?>